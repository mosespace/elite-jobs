import { getServerSession } from 'next-auth/next'
import { z } from 'zod'

import { db } from '@/lib/db'
import { userNameSchema } from '@/lib/validations/user'
import authOptions from '@/lib/authOptions'
import { NextResponse } from 'next/server'

export async function PATCH(req: any, { params: { userId } }: any) {
  try {
    // Ensure user is authentication and has access to this user.
    const session: any = await getServerSession(authOptions)
    if (!session?.user || userId !== session?.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.
    const body = await req.json()
    const payload = userNameSchema.parse(body)

    // Update the user.
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        name: payload.name,
      },
    })

    return new Response(null, { status: 200 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 })
    }

    return new Response(null, { status: 500 })
  }
}

export async function GET(req: any, { params: { userId } }: any) {
  // console.log(userId)
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    })
    return NextResponse.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 })
  }
}
