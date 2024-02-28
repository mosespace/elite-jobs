import { notFound } from 'next/navigation'
import { getCurrentUser } from '@/lib/AuthProvider'
import { dashboardConfig } from '@/config/dashboard'
import { UserNav } from '@/components/backend/layout/UserNav'
import { SiteFooter } from '@/components/backend/layout/site-footer'
import { DashboardNav } from '@/components/backend/layout/latest-nav'
import { MainNav } from '@/components/backend/layout/latest-main-nav'

interface DashboardLayoutProps {
  children?: React.ReactNode
}
export default async function Layout({ children }: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className='flex min-h-screen flex-col space-y-6'>
      <header className='sticky top-0 z-40 border-b bg-background'>
        <div className='container flex h-16 items-center justify-between py-4'>
          <MainNav items={dashboardConfig.mainNav} />
          <UserNav
            user={{
              name: user.name,
              image: user.image,
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className='container grid flex-1 gap-12 md:grid-cols-[200px_1fr]'>
        <aside className='hidden w-[200px] flex-col md:flex'>
          <DashboardNav items={dashboardConfig.sidebarNav as any} />
        </aside>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>
          {children}
        </main>
      </div>
      <SiteFooter className='border-t' />
    </div>
  )
}
