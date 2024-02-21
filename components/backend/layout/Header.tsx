import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MobileSidebar } from './MobileSideBar'
import { UserNav } from './UserNav'
import ThemeToggle from './ThemeToggle/ThemeToggle'
import { ActivitySquare } from 'lucide-react'

export default function Header() {
  return (
    <div className='supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur'>
      <nav className='flex h-14 items-center justify-between px-4'>
        <div className='hidden lg:block'>
          <Link
            href='/'
            className='tracking-relaxed mx-auto inline-flex transform items-center gap-2 text-center text-lg dark:text-white text-zinc-950 transition duration-500 ease-in-out'
          >
            <ActivitySquare className='h-6 w-6' />
            <span className='text-sm font-bold'>Elite Jobs</span>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className='flex items-center gap-2'>
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
