import Hero from '@/components/frontend/Hero'
import JobListing from '@/components/frontend/JobListing'
import TrustedBy from '@/components/frontend/TrustedBy'

export default function Home() {
  return (
    <div className='dark:bg-white'>
      <Hero />
      <TrustedBy />
      <JobListing />
    </div>
  )
}
