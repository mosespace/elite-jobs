import { DashboardHeader } from '@/components/backend/settings/DashboardHeader'
import { DashboardShell } from '@/components/backend/settings/DashboardShell'
import { UserNameForm } from '@/components/backend/settings/UserNameForm'
import { getCurrentUser } from '@/lib/AuthProvider'
import authOptions from '@/lib/authOptions'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Settings',
  description: 'Manage account and website settings.',
}

export default async function SettingsPage() {
  const user: any = await getCurrentUser()
  //   console.log(user)

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  return (
    <div className=''>
      <DashboardShell>
        <DashboardHeader
          heading='Settings'
          text='Manage account and website settings.'
        />
        <div className='grid gap-10'>
          <UserNameForm user={{ id: user.id, name: user.name || '' }} />
        </div>
      </DashboardShell>
    </div>
  )
}
