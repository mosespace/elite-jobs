'use client'
import { ActivitySquare, Menu } from 'lucide-react'
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
  if (pathname.startsWith('/editor')) {
    return null
  }
  return (
    <header className='relative overflow-hidden border-b border-white/5 bg-[#141521]'>
      <div className='relative w-full max-w-7xl md:mx-auto'>
        <div className='relative flex w-full flex-col p-5 md:mx-auto md:flex-row md:items-center md:justify-between md:px-6 lg:px-16'>
          <div className='justify-between flex flex-row items-center text-sm text-white lg:justify-start'>
            <Link
              href='/'
              className='tracking-relaxed md:mx-auto inline-flex transform items-center gap-2 text-center text-lg text-slate-50 transition duration-500 ease-in-out'
            >
              <ActivitySquare className='h-5 w-5' />
              <span className='text-sm font-bold'>Elite Jobs</span>
            </Link>
            <button className='inline-flex items-center justify-center p-2 text-white hover:text-black focus:text-black focus:outline-none md:hidden'>
              <Menu className='h-6 w-6' />
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
