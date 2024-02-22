import { siteConfig } from '@/config/site'
import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin'
import TwitterProvider from 'next-auth/providers/twitter'

import { Client } from 'postmark'

const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN as any)
export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any) as any,
  secret: process.env.NEXT_AUTH_SECRET as any,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as any,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    // }),
    TwitterProvider({
      clientId: String(process.env.TWITTER_CLIENT_ID),
      clientSecret: String(process.env.TWITTER_CLIENT_SECRET),
    }),
    // LinkedInProvider({
    //   clientId: String(process.env.LINKEDIN_CLIENT_ID),
    //   clientSecret: String(process.env.LINKEDIN_CLIENT_SECRET),
    //   authorization: String(
    //     `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=&state=a_random_string_that_is_really_difficult_and_random_2341344&scope=r_liteprofile%20r_emailaddress`,
    //   ),
    //   issuer: 'https://www.linkedin.com',
    //   jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
    //   profile(profile, tokens) {
    //     const defaultImage =
    //       'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    //     return {
    //       id: profile.sub,
    //       name: profile.name,
    //       email: profile.email,
    //       image: profile.picture ?? defaultImage,
    //     }
    //   },
    // }),
    EmailProvider({
      from: process.env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await db.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            emailVerified: true,
          },
        })

        const templateId = user?.emailVerified
          ? process.env.POSTMARK_SIGN_IN_TEMPLATE
          : process.env.POSTMARK_ACTIVATION_TEMPLATE
        if (!templateId) {
          throw new Error('Missing template id')
        }

        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: parseInt(templateId),
          To: identifier,
          From: provider.from as string,
          TemplateModel: {
            action_url: url,
            product_name: siteConfig.name,
          },
          Headers: [
            {
              // Set this to prevent Gmail from threading emails.
              // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
              Name: 'X-Entity-Ref-ID',
              Value: new Date().getTime() + '',
            },
          ],
        })

        if (result.ErrorCode) {
          throw new Error(result.Message)
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        if (user) {
          token.id = user?.id
        }
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
  },
}
