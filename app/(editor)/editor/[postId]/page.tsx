import { Editor } from '@/components/backend/Editor'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getCurrentUser } from '@/lib/AuthProvider'
import authOptions from '@/lib/authOptions'
import { db } from '@/lib/db'
import { Post, User } from '@prisma/client'
import { notFound, redirect } from 'next/navigation'

async function getPostForUser(postId: Post['id'], userId: User['id']) {
  // console.log(userId, postId)
  return await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  })
}

interface EditorPageProps {
  params: { postId: string }
}

export default async function EditorPage({ params }: EditorPageProps) {
  const user: any = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  const post: any = await getPostForUser(params.postId, user.id)

  if (!post) {
    notFound()
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  )
}
