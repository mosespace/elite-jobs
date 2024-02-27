import { notFound } from 'next/navigation'
import Header from '@/components/backend/layout/Header'
import Sidebar from '@/components/backend/layout/SideBar'
import { getCurrentUser } from '@/lib/AuthProvider'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()
  // console.log(user)

  if (!user) {
    return notFound()
  }
  return (
    <>
      <Header user={user}/>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <main className='w-full pt-16'>{children}</main>
      </div>
    </>
  )
}
