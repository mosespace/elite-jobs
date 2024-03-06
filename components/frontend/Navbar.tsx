import React from 'react'
import Header from './Header'
import { getCurrentUser } from '@/lib/AuthProvider'

export default async function Navbar() {
  const user = (await getCurrentUser()) as any
  return <Header userSession={user} />
}
