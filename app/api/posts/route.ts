import { getServerSession } from 'next-auth/next'
import * as z from 'zod'

import { db } from '@/lib/db'
import authOptions from '@/lib/authOptions'
import { NextResponse } from 'next/server'

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
})

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return new Response('Unauthorized', { status: 403 })
    }

    const { user }: any = session
    const posts = await db.post.findMany({
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      where: {
        authorId: user.id,
      },
    })

    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json(null, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const session: any = await getServerSession(authOptions)
    if (!session) {
      return new Response('Unauthorized', { status: 403 })
    }
    const json = await req.json()
    const body = postCreateSchema.parse(json)

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: session.user.id,
      },
      select: {
        id: true,
      },
    })

    return NextResponse.json(post)
  } catch (error) {
    return NextResponse.json(null, { status: 500 })
  }
}
