import { ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function RelatedJobs({ data }: any) {
  return (
    <>
      {/* related jobs */}
      <div className='ml-0 flex flex-col'>
        <h3 className='mt-8 pb-4 text-xl font-extrabold'>Related Jobs</h3>
        <div className='flex flex-1 flex-col gap-4'>
          {data.slice(0, 2).map((job: any) => (
            <div
              key={job.id}
              className={
                job.isFeatured
                  ? 'rounded-lg bg-indigo-600 text-gray-50 shadow-lg'
                  : 'rounded-lg bg-white text-zinc-950 shadow-lg'
              }
            >
              <div className='px-6 py-5'>
                <div className='flex items-start'>
                  <div className='flex-grow truncate'>
                    <div className='mb-3 w-full items-center justify-between sm:flex'>
                      <Link
                        href={`/category/${job.slug}/${job.id}`}
                        className='flex flex-col font-extrabold'
                      >
                        <h2 className='mb-1 truncate text-2xl  leading-snug sm:mb-0'>
                          {job.title}
                        </h2>
                        <span className='text-sm'>
                          Company:{' '}
                          <span className='text-orange-400'>{job.company}</span>
                        </span>
                      </Link>

                      <div className='flex flex-shrink-0 items-center space-x-3 sm:ml-2'>
                        <button className='group flex items-center text-left text-sm font-medium  hover:text-orange-500 focus:outline-none focus-visible:border-b focus-visible:border-indigo-100'>
                          <span>{job.datePosted}</span>
                        </button>
                      </div>
                    </div>
                    <div className='flex items-end justify-between whitespace-normal'>
                      <Link
                        href={`/category/${job.slug}/${job.id}`}
                        className='max-w-md'
                      >
                        <span className='flex gap-2'>
                          <span className='mb-2 line-clamp-2 rounded-full bg-orange-300 px-3 py-1 text-xs'>
                            {job.salaryRange}
                          </span>
                          <span className='mb-2  line-clamp-2 inline-flex items-center gap-1 rounded-full bg-orange-300 px-3 py-1 text-xs'>
                            <MapPin className='h-3 w-3' /> {job.location}
                          </span>
                        </span>
                      </Link>
                      <Link
                        className='ml-2 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 text-indigo-600 transition duration-150 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white'
                        href={`/category/${job.slug}/${job.id}`}
                      >
                        <span className='block font-bold'>
                          <span className='sr-only'>Read more</span>
                          <ExternalLink />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RelatedJobs
