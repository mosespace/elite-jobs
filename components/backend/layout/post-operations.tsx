'use client'
import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Post } from '@prisma/client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/Icons'

async function deletePost(postId: string) {
  try {
    const baseurl = process.env.NEXT_PUBLIC_APP_URL as string
    const response = await fetch(`${baseurl}/api/posts/${postId}`, {
      method: 'DELETE',
    })

    if (response?.ok) {
      toast({
        description: 'Post was deleted Successfully',
      })
    }

    if (!response?.ok) {
      toast({
        title: 'Something went wrong.',
        description: 'Your post was not deleted. Please try again.',
        variant: 'destructive',
      })
    }

    return true
  } catch (error: any) {
    console.error('Error deleting post:', error.message)
    toast({
      title: 'Something went wrong.',
      description: 'Your post was not deleted. Please try again.',
      variant: 'destructive',
    })
    return true
  }
}

interface PostOperationsProps {
  post: Pick<Post, 'id' | 'title'>
}

export function PostOperations({ post }: PostOperationsProps) {
  const router = useRouter()
  const [showDeleteAlert, setShowDeleteAlert] = React.useState<boolean>(false)
  const [isDeleteLoading, setIsDeleteLoading] = React.useState<boolean>(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted'>
          <Icons.ellipsis className='h-4 w-4' />
          <span className='sr-only'>Open</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem>
            <Link href={`/editor/${post.id}`} className='flex w-full'>
              Edit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='flex cursor-pointer items-center text-destructive focus:text-destructive'
            onSelect={() => setShowDeleteAlert(true)}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this post?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async event => {
                event.preventDefault()
                setIsDeleteLoading(true)

                const deleted = await deletePost(post.id)
                console.log(post.id)

                if (deleted) {
                  setIsDeleteLoading(false)
                  setShowDeleteAlert(false)
                  router.refresh()
                }
              }}
              className='bg-red-600 focus:ring-red-600'
            >
              {isDeleteLoading ? (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              ) : (
                <Icons.trash className='mr-2 h-4 w-4' />
              )}
              <span>Delete</span>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
