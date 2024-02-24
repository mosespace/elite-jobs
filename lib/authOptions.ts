import { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { resend } from './resend'
import MagicLinkEmail from '@/emails/MagicLinkEmail'
import { db } from '@/lib/db'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as any,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as any,
    }),
    {
      id: 'resend',
      type: 'email',
      sendVerificationRequest: async (params: any) => {
        const { identifier: email, url, token } = params
        console.log(`Sending verification request email to: ${email}`)
        try {
          const data = await resend.emails.send({
            from: 'info@mosespace.com',
            to: [email],
            subject: `Confirm Your Email Address`,
            react: MagicLinkEmail({ url } as any),
          } as any)

          console.log(`Verification email sent successfully to: ${email}`)
          return { success: true, data }
        } catch (error) {
          console.error(`Failed to send verification email to ${email}:`, error)
          throw new Error('Failed to send verification Email')
        }
      },
    } as any,
  ],

  callbacks: {
    async signIn({ email }) {
      console.log(`User signed in with email: ${email}`)
      return true
    },
    async session({ token, session }) {
      console.log('Session callback triggered:', session)
      if (token && session) {
        session.user = {
          token: token.accessToken,
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
        } as {
          id: string // Assuming id is of type string, adjust it as needed
          name?: string | null | undefined
          email?: string | null | undefined
          image?: string | null | undefined
          token?: string | null | undefined
        }
      }
      return session
    },
    async jwt({ token, user }) {
      const email = token?.email || (user?.email ?? null)
      console.log('JWT callback triggered. Email:', email)

      const dbUser = await db.user.findFirst({
        where: {
          email: email,
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

  pages: {
    signIn: '/login',
  },

  adapter: PrismaAdapter(prisma) as any,

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXT_AUTH_SECRET as any,
}

export default authOptions
