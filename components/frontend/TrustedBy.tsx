import React from 'react'

function TrustedBy() {
  return (
    <>
      <section>
        <div className='relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16'>
          <div className='text-center'>
            <h1 className='within 500 fortune companies text-lg font-bold uppercase leading-6 text-zinc-950'>
              We are already trusted by the bigger brands worldwide
            </h1>
          </div>
          <div className='grid grid-cols-2 gap-0.5 pt-6 md:grid-cols-6'>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/8.svg'
                alt='logo'
              />
            </div>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/2.svg'
                alt='logo'
              />
            </div>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/3.svg'
                alt='logo'
              />
            </div>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/4.svg'
                alt='logo'
              />
            </div>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/5.svg'
                alt='logo'
              />
            </div>
            <div className='col-span-1 flex justify-center px-8'>
              <img
                className='max-h-12'
                src='https://windstatic.com/images/logos/6.svg'
                alt='logo'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TrustedBy
