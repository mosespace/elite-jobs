import React from 'react'

function Hero() {
  return (
    <>
      <section className='flex items-center justify-center bg-[#141521]'>
        <div className='relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16'>
          <div className='mx-auto max-w-3xl text-center'>
            <div>
              <span className='w-auto rounded-full bg-white/5 px-6 py-3'>
                <span className='font-medium text-[#50d236]'>
                  Find your dream job today
                </span>
              </span>
              <p className='mt-8 text-3xl font-extrabold tracking-tight text-white lg:text-6xl'>
                Join the best tech
                <span className='md:block'>startups in the industry</span>
              </p>
              <p className='mx-auto mt-8 max-w-xl text-base text-slate-300 lg:text-xl'>
                Tired with job boards? Join millions of professionals and boost
                your growth with best career tools and job recommendations in
                Africa.
              </p>
            </div>
            <div className='mx-auto mt-10 flex max-w-sm flex-col justify-center gap-3 sm:flex-row'>
              <button className='active:text-#279f0e group inline-flex items-center justify-center rounded-full bg-blue-500/85 px-4 py-2 text-sm text-white hover:bg-blue-500/95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-50 active:bg-fuchsia-50'>
                Post jobs yearly - $10
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
