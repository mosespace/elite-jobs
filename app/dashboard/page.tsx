import Intro from '@/components/backend/layout/Intro'
import { getCurrentUser } from '@/lib/AuthProvider'

export default async function Page() {
  const user = (await getCurrentUser()) as any

  return <Intro user={user} />
}
