'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { ButtonProps, buttonVariants } from '@/components/ui/button'

interface JobCreateButtonProps extends ButtonProps {}

export function JobCreateButton({
  className,
  variant,
  ...props
}: JobCreateButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onClick() {
    setIsLoading(true)
    const baseurl = process.env.NEXT_PUBLIC_VERCEL_URL as any
    const response = await fetch(`http://${baseurl}/api/posts/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Untitled Job',
      }),
    })

    setIsLoading(false)

    if (!response?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your post was not created. Please try again.',
        variant: 'destructive',
      })
    }

    const post = await response.json()

    // This forces a cache invalidation.
    router.refresh()

    router.push(`/editor/${post.id}`)
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants({ variant }),
        {
          'cursor-not-allowed opacity-60': isLoading,
        },
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
      ) : (
        <Icons.add className='mr-2 h-4 w-4' />
      )}
      Create Job
    </button>
  )
}
