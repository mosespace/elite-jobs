import { Editor } from '@/components/backend/Editor'
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
        description: post.description,
        jobType: post.jobType,
        jobRole: post.jobRoles,
        salaryRange: post.salaryRange,
        location: post.location,
        content: post.content,
        company_name: post.company_name,
        company_location: post.company_location,
        company_website: post.company_website,
        application_link: post.application_link,
        company_salary_range: post.company_salary_range,
        published: post.published,
        isFeatured: post.isFeatured,
      }}
    />
  )
}
