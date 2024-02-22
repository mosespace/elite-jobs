import TextInput from '@/components/backend/formInputs/TextInput'
import TextArea from '@/components/backend/formInputs/TextArea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus, X } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <ScrollArea className='h-full'>
      <div className='flex-1k mb-8 space-y-4 p-4 pt-6 md:p-8'>
        <div className='flex min-h-screen w-full items-center justify-center space-y-2 pb-4'>
          <div className='block w-full max-w-2xl px-2 py-4 md:p-4'>
            {/* <!-- Modal content --> */}
            <div className='rounded-lg border bg-white p-4 shadow dark:border-gray-600 dark:bg-zinc-950 sm:p-5'>
              {/* <!-- Modal header --> */}
              <div className='mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600 sm:mb-5'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Create Job
                </h3>
                <button
                  type='button'
                  className='ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                  data-modal-toggle='defaultModal'
                >
                  <X className='h-5 w-5' />
                </button>
              </div>
              <form action='#'>
                <div className='mb-4 grid gap-4 sm:grid-cols-2'>
                  <TextInput
                    label='Title'
                    type='text'
                    name='title'
                    placeholder='Enter job title'
                  />
                  <TextInput
                    label='Company'
                    type='text'
                    name='company'
                    placeholder='Enter recruiting company'
                  />

                  {/* salary range */}
                  <div>
                    <label
                      htmlFor='salaryRange'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Salary Range
                    </label>
                    <select
                      id='salaryRange'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    >
                      <option>Select salary range</option>

                      <option value='TV'> $20K - $50K</option>
                      <option value='PC'>$50K - $100K</option>
                      <option value='GA'>{`> $100K`}</option>
                      <option value='PH'>Drawing / Painting</option>
                    </select>
                  </div>

                  {/* salary */}
                  <TextInput
                    label='Salary'
                    type='number'
                    name='salary'
                    placeholder='$2999'
                  />

                  {/* job type */}
                  <div>
                    <label
                      htmlFor='jobType'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Job Type
                    </label>
                    <select
                      id='jobType'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    >
                      <option>Select job type</option>

                      <option value='TV'>Full-time </option>
                      <option value='PC'>Part-time</option>
                      <option value='GA'>
                        Internship Contract / Freelance
                      </option>
                      <option value='PH'>Co - Founder</option>
                    </select>
                  </div>

                  {/* job role */}
                  <div>
                    <label
                      htmlFor='jobRole'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Job Role
                    </label>
                    <select
                      id='jobRole'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    >
                      <option>Select job role</option>

                      <option value='TV'>Programming </option>
                      <option value='PC'>Design </option>
                      <option value='GA'>Management / Finance</option>
                      <option value='PH'>Customer Support</option>
                      <option value='SF'>Sales or Marketing</option>
                    </select>
                  </div>

                  {/* description */}
                  <TextArea
                    label='Description'
                    name='description'
                    placeholder='Write product description here'
                  />

                  {/* job location */}
                  <div>
                    <label
                      htmlFor='location'
                      className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Job Location
                    </label>
                    <select
                      id='jobRole'
                      className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-transparent p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                    >
                      <option>Select job location</option>

                      <option value='TV'>Uganda</option>
                      <option value='PC'>NewYork </option>
                      <option value='GA'>United Kingdom / Finance</option>
                      <option value='PH'>Kenya</option>
                      <option value='Pk'>Rwanda</option>
                    </select>
                  </div>
                </div>

                <button
                  type='submit'
                  className='inline-flex items-center rounded-lg bg-zinc-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-950/70 focus:outline-none focus:ring-0 dark:bg-[#ffa500] dark:hover:bg-[#ffa500]/70'
                >
                  <Plus className='-ml-1 mr-1 h-6 w-6' />
                  Add new product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}

export default page
