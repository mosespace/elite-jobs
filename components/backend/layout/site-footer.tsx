import Link from 'next/link'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'
import { siteConfig } from '@/config/site'
import ThemeToggle from './ThemeToggle/ThemeToggle'

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Icons.logo />
          <p className='text-center text-sm leading-loose md:text-left'>
            Built by{' '}
            <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              NextJs
            </Link>
            . Hosted on{' '}
            <Link
              href='https://vercel.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              Vercel
            </Link>
            . Designed by 💖 from{' '}
            <Link
              href='https://mosespace.com'
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              mosespace.com
            </Link>
            . The source code is available on{' '}
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  )
}
