import { Nav } from '@/components/backend/Nav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
