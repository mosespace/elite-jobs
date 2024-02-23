import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import { sendVerificationRequest } from './sendVerificationRequest'
import { PrismaClient } from '@prisma/client'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(new PrismaClient()) as any,
  secret: process.env.NEXT_AUTH_SECRET as any,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
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
