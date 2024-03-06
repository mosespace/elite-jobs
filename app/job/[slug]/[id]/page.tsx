import { getJob } from '@/actions/jobs'
import DetailedJob from '@/components/frontend/DetailedJob'
import React from 'react'

async function page({ params: { id } }: any) {
  const job = await getJob({ params: { id } })

  return <DetailedJob data={job} />
}

export default page
