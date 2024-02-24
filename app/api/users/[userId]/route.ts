import { authOptions } from '@/lib/authOptions'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'

export async function PATCH(req: any, { params: { id } }: any) {
  console.log(id)
  try {
    const { name } = await req.json()
    // Ensure user is authentication and has access to this user.
    const session: any = await getServerSession(authOptions)
    if (!session?.user || id !== session?.user.id) {
      return new Response(null, { status: 403 })
    }

    // Get the request body and validate it.

    // Update the user.
    const updatedUser = await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name,
      },
    })

    console.log('User updated successfully', updatedUser)
    return NextResponse.json(updatedUser, {
      status: 201,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: 'Failed to update a user',
      },
      {
        status: 500,
      },
    )
  }
}
