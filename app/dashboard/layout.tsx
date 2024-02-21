import Header from '@/components/backend/layout/Header'
import Sidebar from '@/components/backend/layout/SideBar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next Shadcn Dashboard Starter',
  description: 'Basic dashboard with Next.js and Shadcn',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <main className='w-full pt-16'>{children}</main>
      </div>
    </>
  )
}
