'use client'
import { ActivitySquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()
  if (pathname.startsWith('/dashboard')) {
    return null
  }
  if (pathname.startsWith('/register')) {
    return null
  }
  if (pathname.startsWith('/login')) {
    return null
  }
  return (
    <header className='relative overflow-hidden border-b border-white/5 bg-[#141521]'>
      <div className='relative mx-auto w-full max-w-7xl'>
        <div
          className='relative mx-auto flex w-full flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-16'
          x-data='{ open: false }'
        >
          <div className='flex flex-row items-center justify-between text-sm text-white lg:justify-start'>
            <Link
              href='/'
              className='tracking-relaxed mx-auto inline-flex transform items-center gap-2 text-center text-lg text-slate-50 transition duration-500 ease-in-out'
            >
              <ActivitySquare className='h-5 w-5' />
              <span className='text-sm font-bold'>Elite Jobs</span>
            </Link>
            <button className='inline-flex items-center justify-center p-2 text-white hover:text-black focus:text-black focus:outline-none md:hidden'>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  className='inline-flex'
                  d='M4 6h16M4 12h16M4 18h16'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></path>
                <path
                  className='hidden'
                  d='M6 18L18 6M6 6l12 12'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></path>
              </svg>
            </button>
          </div>
          <nav className='hidden flex-grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0'>
            <div className='inline-flex list-none items-center gap-2 lg:ml-auto'>
              <button className='focus:shadow-outline mt-2 block px-4 py-2 text-sm text-white hover:text-white/50 focus:outline-none md:mt-0'>
                Sign in
              </button>
              <button className='active:text-#279f0e group inline-flex items-center justify-center rounded-full bg-blue-500/85 px-4 py-2 text-sm text-white hover:bg-blue-500/95 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-50 active:bg-fuchsia-50'>
                Post jobs yearly - $10
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
