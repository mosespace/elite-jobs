'use client'
import { ActivitySquare } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/dashboard')) {
    return null
  }
  return (
    <>
      <footer className='w-full bg-[#141521]'>
        <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6'>
          <div className='space-y-6k flex items-center justify-between px-16'>
            <div className='mx-autok'>
              <Link
                href='/'
                className='tracking-relaxed mx-auto inline-flex transform items-center gap-2 text-center text-lg text-slate-50 transition duration-500 ease-in-out'
              >
                <ActivitySquare className='h-8 w-8' />
                <span>Elite Jobs</span>
              </Link>
            </div>
            <div className='mx-autok'>
              <span className='mx-auto text-sm text-gray-500'>
                Copyright © 2024
                <Link
                  href='https://mosespace.com'
                  className='mx-2 text-blue-500 hover:text-gray-500'
                  rel='noopener noreferrer'
                >
                  @mosespace
                </Link>
                developed out of 💖
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
