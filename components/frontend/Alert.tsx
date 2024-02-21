import Link from 'next/link'
import React from 'react'

function Alert() {
  return (
    <>
      <div className='bg-indigo-600 px-4 py-3 text-white'>
        <p className='text-center text-sm font-medium'>
          Love Elite jobs?
          <Link href='#' className='inline-block underline'>
            Check out the most interesting part!
          </Link>
        </p>
      </div>
    </>
  )
}

export default Alert
