import { getJobs } from '@/actions/jobs'
import { Icons } from '@/components/Icons'
import Hero from '@/components/frontend/Hero'
import JobListing from '@/components/frontend/JobListing'
import TrustedBy from '@/components/frontend/TrustedBy'

export default async function Home() {
  const allJobs = await getJobs()

  return (
    <div className='dark:bg-white'>
      <Hero />
      <TrustedBy />
      <JobListing allJobs={allJobs} />
    </div>
  )
}
