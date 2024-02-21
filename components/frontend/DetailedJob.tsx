import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck2,
  CreditCard,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RelatedJobs from './RelatedJobs'

const jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    slug: 'softwares-engineer',
    company: 'kikuubo-online',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    datePosted: '22 days ago',
    isFeatured: true,
    location: 'Uganda',
    salaryRange: '$20K-$50K',
  },
  {
    id: 2,
    title: 'UX Designer',
    slug: 'ux-designer',
    company: 'safeBoda',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    datePosted: '1 month ago',
    isFeatured: false,
    location: 'United Kingdom',
    salaryRange: '$50K-$100K',
  },
  {
    id: 3,
    title: 'UX Designer',
    slug: 'ux-designer',
    company: 'nrg-radio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    datePosted: '1 month ago',
    isFeatured: false,
    location: 'Rwanda',
    salaryRange: '$100K',
  },
  {
    id: 4,
    title: 'UX Designer',
    slug: 'ux-designer',
    company: 'nbs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    datePosted: '1 month ago',
    isFeatured: true,
    location: 'Gulu',
    salaryRange: '$20K-$10K',
  },
  // Add more job objects as needed
]

function DetailedJob() {
  return (
    <div className='relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16'>
      <Link
        href='/'
        className='inline-flex items-center gap-1 text-base font-bold text-blue-500'
      >
        <ArrowLeft />
        All Jobs
      </Link>

      <div className='mt-8 flex gap-8'>
        {/* Job Description*/}
        <div className='flex flex-1 flex-col gap-4'>
          <h2 className='max-w-lg text-[2rem] font-extrabold leading-10'>
            Engineering Manager Developer Experience
          </h2>

          {/* description */}
          <div className='flex flex-col'>
            <h3 className='mt-8 pb-4 text-xl font-extrabold'>The Role</h3>
            <p>
              In the world of AI, behavioural predictions are leading the charge
              to better machine learning. <br></br>
              <br></br>
              There is so much happening in the AI space. Advances in the
              economic sectors have seen automated business practices rapidly
              increasing economic value. While the realm of the human sciences
              has used the power afforded by computational capabilities to solve
              many human based dilemmas. Even the art scene has adopted
              carefully selected ML applications to usher in the technological
              movement. <br></br>
              <br></br>
              As a Senior Client Engineer, you'll work alongside other
              engineers, designers, and product managers to tackle everything
              from huge company initiatives to modest but important bug fixes,
              from start to finish. You'll also collaborate with your product
              team on discovery, helping to assess the direction and feasibility
              of product changes. And, perhaps most importantly, you'll actively
              contribute to the evolution of the culture and processes of a
              growing engineering team.
            </p>
          </div>

          {/* about */}
          <div className='flex flex-col'>
            <h3 className='mt-8 pb-4 text-xl font-extrabold'>About You</h3>
            <p>
              You love building great software. Your work could be supporting
              new feature development, migrating existing features, and creating
              other mobile and web solutions for customers. You'll have a
              primary focus on frontend development using Javascript. Our
              client's tech stack is JavaScript, primarily using React. A strong
              understanding of JS core (ES2019+) is required, with some exposure
              in Java as back-end technology. We use modern tools, which means
              you'll have the opportunity to work with Webpack, Redux, Apollo,
              Styled Components, and much more. <br></br>
              <br></br>
              You love learning. Engineering is an ever-evolving world. You
              enjoy playing with new tech and exploring areas that you might not
              have experience with yet. You are self-driven, self-learner
              willing to share knowledge and participate actively in your
              community. <br></br>
              <br></br>
              Having overlap with your team is critical when working in a global
              remote team. Modus requires all team members to overlap with EST
              morning hours daily. In addition, reliable high speed internet is
              a must.
            </p>
          </div>

          {/* things you might do */}
          <div className='flex flex-col'>
            <h3 className='mt-8 pb-4 text-xl font-extrabold'>
              Things You Might Do
            </h3>
            <span>
              We are a fast-growing, and remote-first company, so you'll likely
              get experience on many different projects across the organization.
              That said, here are some things you'll probably do:<br></br>
              <br></br>
              <ul className='flex flex-col gap-4'>
                <li className='ml-8 list-disc'>
                  Give back to the community via open source and blog posts
                </li>
                <li className='ml-8 list-disc'>
                  Travel and meet great people- as part of our remote-first
                  lifestyle, it's important that we come together as needed to
                  work together, meet each other in person and have fun
                  together. Please keep that in mind when you apply
                </li>
                <li className='ml-8 list-disc'>
                  Teach and be taught: Modus creates active teams that work in
                  internal and external projects together, giving opportunities
                  to stay relevant with the latest technologies and learning
                  from experts worldwide
                </li>
                <li className='ml-8 list-disc'>
                  Interact directly with internal and external clients to
                  represent Modus and its values
                </li>
              </ul>{' '}
            </span>
          </div>

          {/* related jobs */}
          <RelatedJobs data={jobs} />

          {/* newsletter */}
          <div className='relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 py-8 shadow-2xl sm:rounded-3xl'>
            <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-2xl'>
              Keep Updated
            </h2>

            <p className='mx-auto mt-2 max-w-xl text-center text-base leading-4 text-gray-300'>
              Keep pace with SecureCloud advancements! Join our mailing list for
              selective, noteworthy updates.
            </p>

            <form className='mx-auto mt-10 flex max-w-md gap-x-4'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                required={true}
                className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6'
                placeholder='Enter your email'
              />

              <button
                type='submit'
                className='flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Notify me
              </button>
            </form>

            <svg
              viewBox='0 0 1024 1024'
              className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2'
              aria-hidden='true'
            >
              <circle
                cx='512'
                cy='512'
                r='512'
                fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
                fill-opacity='0.7'
              ></circle>
              <defs>
                <radialGradient
                  id='759c1415-0410-454c-8f7c-9a820de03641'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(512 512) rotate(90) scale(512)'
                >
                  <stop stop-color='#7775D6'></stop>
                  <stop offset='1' stop-color='#7ED321' stop-opacity='0'></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Company Details*/}
        <div className='flex gap-8'>
          <div className='hidden max-w-xs flex-none md:block'>
            <div className='sticky top-12'>
              <div className='flex flex-col items-center justify-center rounded-xl border bg-[#F9FAFB] px-3 py-8 shadow-sm dark:border-gray-700'>
                <div className='mb-8 flex flex-col items-center'>
                  <Image
                    width={1080}
                    height={1080}
                    className='h-16 w-16 rounded-full object-cover object-center'
                    src='/logo.svg'
                    alt='company-name'
                  />
                  <h2 className='mt-4 text-xl font-bold text-zinc-950'>
                    Medium Inc.
                  </h2>
                </div>

                <div className='p-4'>
                  <h3 className='inline-flex items-center gap-2 text-sm  text-zinc-950  '>
                    <CalendarCheck2 className='h-4 w-4' />
                    24 August, 2024
                  </h3>
                  <p className='mt-1 inline-flex items-center gap-2 text-sm text-zinc-950'>
                    <MapPin className='h-4 w-4' />
                    London, UK / Remote friendly
                  </p>
                  <p className='mt-1 inline-flex items-center gap-2 text-sm text-zinc-950'>
                    <CreditCard className='h-4 w-4' />
                    $75K - $100K
                  </p>
                  <div className='mt-4 flex w-full flex-col justify-center'>
                    <button className='group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500/85 px-4 py-2 text-sm text-white hover:bg-blue-500/95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-50 active:bg-fuchsia-50 active:text-[#279f0e]'>
                      Apply Now <ArrowRight />
                    </button>
                    <Link
                      href='/job-link'
                      className='mt-4 text-center text-sm text-blue-600'
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailedJob
