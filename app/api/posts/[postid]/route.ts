import * as z from 'zod'
import { db } from '@/lib/db'
import { NextResponse } from 'next/server'
import authOptions from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { postPatchSchema } from '@/lib/validations/post'

const routeContextSchema = z.object({
  params: z.object({
    postid: z.string(),
  }),
})

export async function DELETE(request: any, { params: { postid } }: any) {
  // console.log(postid)

  try {
    // Checking if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(postid))) {
      console.log('User has access to delete the post.')
      return new Response(null, { status: 403 })
    }

    const post: any = await db.post.delete({
      where: {
        id: postid,
      },
    })
    return NextResponse.json('Deleted the below post', post)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        error,
        message: 'Failed to delete a post',
      },
      {
        status: 500,
      },
    )
  }
}

export async function PATCH(
  req: Request,
  context: z.infer<typeof routeContextSchema>,
) {
  try {
    // Validating route params.
    const { params } = routeContextSchema.parse(context)

    // Checking if the user has access to this post.
    if (!(await verifyCurrentUserHasAccessToPost(params.postId))) {
      return new Response(null, { status: 403 })
    }

    // Getting and validating the request body.
    const json = await req.json()
    const body = postPatchSchema.parse(json)
    console.log(body.title, body.content)
    // Updating the post.
    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
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

async function verifyCurrentUserHasAccessToPost(postid: string) {
  const session: any = await getServerSession(authOptions)
  const count = await db.post.count({
    where: {
      id: postid,
      authorId: session?.user.id,
    },
  })

  return count > 0
}
