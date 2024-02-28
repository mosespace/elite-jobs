'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import '@/styles/editor.css'
import { Post } from '@prisma/client'
import EditorJS from '@editorjs/editorjs'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'
import * as z from 'zod'

import '@/styles/editor.css'
import { cn } from '@/lib/utils'
import { postPatchSchema } from '@/lib/validations/post'
import { buttonVariants } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/Icons'

interface EditorProps {
  post: Pick<Post, 'id' | 'title' | 'content' | 'published'>
}

type FormData = z.infer<typeof postPatchSchema>

export function Editor({ post }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  const ref = React.useRef<EditorJS>()
  const router = useRouter()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [isMounted, setIsMounted] = React.useState<boolean>(false)

  const initializeEditor = React.useCallback(async () => {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Header = (await import('@editorjs/header')).default
    const Embed = (await import('@editorjs/embed')).default
    const Table = (await import('@editorjs/table')).default
    const List = (await import('@editorjs/list')).default
    const Code = (await import('@editorjs/code')).default
    const LinkTool = (await import('@editorjs/link')).default
    const InlineCode = (await import('@editorjs/inline-code')).default

    const body = postPatchSchema.parse(post)

    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor
        },
        placeholder: 'Type here to write your job...',
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      })
    }
  }, [post])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = undefined
      }
    }
  }, [isMounted, initializeEditor])

  async function onSubmit(data: FormData) {
    try {
      setIsSaving(true)

      // Save the editor blocks
      const blocks = await ref.current?.save()

      // Prepare the data to be sent in the PATCH request
      const postData = {
        title: data.title,
        content:
          "useHooks(🔥).ts is a React hooks library, written in Typescript and easy to use. It provides a set of hooks that enables you to build your React applications faster. The hooks are built upon the principles of DRY (Don't Repeat Yourself). There are hooks for most common use cases you might need.The library is designed to be as minimal as possible. It is fully tree-shakable (using the ESM version), meaning that you only import the hooks you need, and the rest will be removed from your bundle making the cost of using this library negligible. Most hooks are extensively tested and are being used in production environments.",
      }

      // Logging the data being sent (optional)
      console.log('Data to be sent:', postData)

      // Send the PATCH request to update the post
      const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })

      setIsSaving(false)

      // Check if the request was successful
      if (!response.ok) {
        // If not successful, throw an error
        throw new Error('Failed to update post')
      }

      // If successful, refresh the page
      router.refresh()

      // Show a success message
      toast({ description: 'Your post has been updated.' })
    } catch (error) {
      // If an error occurs, handle it
      console.error('Error updating post:', error)

      // Show an error message
      toast({
        title: 'Error',
        description: 'Failed to update post. Please try again.',
        variant: 'destructive',
      })
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid w-full gap-10'>
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center space-x-10'>
            <Link
              href='/dashboard'
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <>
                <Icons.chevronLeft className='mr-2 h-4 w-4' />
                Back
              </>
            </Link>
            <p className='text-sm text-muted-foreground'>
              {post.published ? 'Published' : 'Draft'}
            </p>
          </div>
          <button type='submit' className={cn(buttonVariants())}>
            {isSaving && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <span>Save</span>
          </button>
        </div>
        <div className='mx-auto w-[800px]'>
          <TextareaAutosize
            autoFocus
            id='title'
            defaultValue={post.title}
            placeholder='Post title'
            className='w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none'
            {...register('title')}
          />
          <div id='editor' className='h-auto' />
          <p className='text-sm text-gray-500'>
            Use{' '}
            <kbd className='rounded-md border bg-muted px-1 text-xs uppercase'>
              Tab
            </kbd>{' '}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  )
}
