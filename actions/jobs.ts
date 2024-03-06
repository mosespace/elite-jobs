import { db } from '@/lib/db'

export async function getJobs() {
  try {
    const jobs = await db.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })
    return jobs
  } catch (error: any) {
    // console.log(error)
  }
}

export async function getJob({ params: { id } }: any) {
  // console.log(id)
  try {
    const job = await db.post.findUnique({
      where: {
        id: id,
      },
    })
    return job
  } catch (error: any) {
    // console.log(error)
  }
}
