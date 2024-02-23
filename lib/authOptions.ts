import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import { sendVerificationRequest } from './sendVerificationRequest'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: String(process.env.TWITTER_CLIENT_ID),
      clientSecret: String(process.env.TWITTER_CLIENT_SECRET),
    }),
    {
      id: 'resend',
      type: 'email',
      sendVerificationRequest, // Updated here
    } as any,
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(email)
      return true
    },
    async session({ token, session }) {
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
      console.log(session)
      return session
      // console.log(session)
      // return session
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

  pages: {
    signIn: '/login',
  },

  adapter: PrismaAdapter(prisma) as any,

  session: {
    strategy: 'jwt',
  },

  secret: process.env.NEXT_AUTH_SECRET as any,
}
