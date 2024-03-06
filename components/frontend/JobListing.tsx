'use client'
import { ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

function JobListing({ allJobs }: any) {
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedJobRoles, setSelectedJobRoles] = useState<string[]>([])
  const [selectedSalaryRange, setSelectedSalaryRange] = useState<string[]>([])

  const handleJobTypeChange = (jobType: string) => {
    if (selectedJobTypes.includes(jobType)) {
      setSelectedJobTypes(selectedJobTypes.filter(type => type !== jobType))
      // console.log(setSelectedJobTypes)
    } else {
      setSelectedJobTypes([...selectedJobTypes, jobType])
    }
  }

  const handleJobRoleChange = (jobRole: string) => {
    // console.log(jobRole)
    if (selectedJobRoles.includes(jobRole)) {
      setSelectedJobRoles(selectedJobRoles.filter(role => role !== jobRole))
    } else {
      setSelectedJobRoles([...selectedJobRoles, jobRole])
    }
  }

  const handleSalaryRange = (salaryRange: string) => {
    // console.log(salaryRange)
    if (selectedSalaryRange.includes(salaryRange)) {
      setSelectedSalaryRange(
        selectedSalaryRange.filter(role => role !== salaryRange),
      )
    } else {
      setSelectedSalaryRange([...selectedSalaryRange, salaryRange])
    }
  }

  const jobs = allJobs?.filter((job: any) => {
    return (
      job.published === true &&
      (selectedJobTypes.length === 0 ||
        selectedJobTypes.includes(job.jobType)) &&
      (selectedJobRoles.length === 0 ||
        selectedJobRoles.includes(job.jobRole)) &&
      (selectedSalaryRange.length === 0 ||
        selectedSalaryRange.includes(job.salaryRange))
    )
  })

  const formatDate = (dateString: any) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className='relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16'>
      <h2 className='text-3xl font-bold text-black'>Latest jobs</h2>

      <div className='mt-8 flex flex-col gap-8 md:flex-row'>
        {/* All Jobs*/}
        <div className='flex flex-1 flex-col gap-4'>
          {jobs?.map((job: any) => (
            <div
              key={job.id}
              className={
                job.isFeatured
                  ? 'rounded-lg bg-indigo-600 text-gray-50 shadow-lg'
                  : 'rounded-lg text-zinc-950 shadow-lg'
              }
            >
              <div className='px-6 py-5'>
                <div className='flex items-start'>
                  <div className='flex-grow truncate'>
                    <div className='mb-3 w-full items-center justify-between sm:flex'>
                      <Link
                        href={`/job/${job.slug}/${job.id}`}
                        className='flex flex-col font-extrabold'
                      >
                        <h2 className='mb-1 truncate text-2xl  leading-snug sm:mb-0'>
                          {job.title}
                        </h2>
                        <span className='text-sm'>
                          Company:{' '}
                          <span className='text-orange-400'>
                            {job.company_name}
                          </span>
                        </span>
                      </Link>

                      <div className='flex flex-shrink-0 items-center space-x-3 sm:ml-2'>
                        <button className='group flex items-center text-left text-sm font-medium  hover:text-orange-500 focus:outline-none focus-visible:border-b focus-visible:border-indigo-100'>
                          <span>{formatDate(job.createdAt)}</span>
                        </button>
                      </div>
                    </div>
                    <div className='flex items-end justify-between whitespace-normal'>
                      <Link
                        href={`/job/${job.slug}/${job.id}`}
                        className='max-w-md '
                      >
                        <span className='mb-2 line-clamp-2'>
                          {job.description}
                        </span>
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
                        href={`/job/${job.slug}/${job.id}`}
                      >
                        <span className='block font-bold'>
                          <span className='sr-only'>Read more</span>{' '}
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
        {/* Job Filters*/}
        <div className='sticky top-12 z-10 max-h-screen overflow-y-auto rounded-lg bg-white px-8 py-8 shadow-2xl md:w-full md:px-12 lg:max-w-md'>
          {/* Job Type */}
          <>
            <div className='mb-3 flex justify-between'>
              <h6 className='text-base font-medium text-gray-900'>Job Type</h6>
              <button
                onClick={() => setSelectedJobTypes([])}
                className='text-sm text-blue-500 hover:text-gray-800'
              >
                Clear All
              </button>
            </div>
            <div className='flex flex-col space-y-2 text-white dark:text-black'>
              {[
                'Full Time',
                'Part Time',
                'Internship',
                'Contract Freelance',
                'Co - Founder',
              ].map(jobType => (
                <label key={jobType} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox text-indigo-600'
                    checked={selectedJobTypes.includes(jobType)}
                    onChange={() => handleJobTypeChange(jobType)}
                  />
                  <span className='ml-2'>{jobType}</span>
                </label>
              ))}
            </div>
            <hr className='my-3' />
          </>

          {/* Job Roles */}
          <>
            <h6 className='mb-3 text-base font-medium text-gray-900'>
              Job Roles
            </h6>
            <div className='flex flex-col space-y-2 text-white dark:text-black'>
              {[
                'Programming',
                'Design',
                'Management Finance',
                'Customer Support',
                'Sales or Marketing',
              ].map(jobRole => (
                <label key={jobRole} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox text-indigo-600'
                    checked={selectedJobRoles.includes(jobRole)}
                    onChange={() => handleJobRoleChange(jobRole)}
                  />
                  <span className='ml-2'>{jobRole}</span>
                </label>
              ))}
            </div>
            <hr className='my-3' />
          </>

          {/* Remote Only */}
          {/* <>
            <h6 className='mb-3 text-base font-medium text-gray-900'>
              Remote Only
            </h6>
            <div className='space-y-2 text-white dark:text-black'>
              <label className='inline-flex cursor-pointer items-center'>
                <input type='checkbox' value='' className='peer sr-only' />
                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                <span className='ms-3 text-sm font-medium italic text-gray-900 dark:text-gray-300'>
                  Off
                </span>
              </label>
            </div>

            <hr className='my-3' />
          </> */}

          {/* salaryRange */}
          <>
            <h6 className='mb-3 text-base font-medium text-gray-900'>
              Salary Range
            </h6>
            <div className='flex flex-col space-y-2 text-white dark:text-black'>
              {['$20K - $50K', ' $50K - $100K', '> $100K'].map(salaryRange => (
                <label key={salaryRange} className='inline-flex items-center'>
                  <input
                    type='checkbox'
                    className='form-checkbox text-indigo-600'
                    checked={selectedSalaryRange.includes(salaryRange)}
                    onChange={() => handleSalaryRange(salaryRange)}
                  />
                  <span className='ml-2'>{salaryRange}</span>
                </label>
              ))}
            </div>
            <hr className='my-3' />
          </>

          {/* Location */}
          {/* <>
            <h6 className='mb-3 text-base font-medium text-gray-900'>
              Location
            </h6>
            <div className='relative'>
              <select className='block w-full appearance-none rounded border border-gray-300 bg-white px-4 py-3 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'>
                <option disabled selected hidden>
                  Select Location
                </option>
                <option value='1'>New York</option>
                <option value='2'>Los Angeles</option>
                <option value='3'>Chicago</option>
                <option value='4'>Houston</option>
              </select>

              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <ChevronDown className='h-4 w-4' />
              </div>
            </div>
          </> */}
        </div>
      </div>
    </div>
  )
}

export default JobListing
