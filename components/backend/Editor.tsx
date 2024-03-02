'use client'

import Link from 'next/link'
import '@/styles/editor.css'
import * as React from 'react'
import { Post } from '@prisma/client'
import EditorJS from '@editorjs/editorjs'
import { useRouter } from 'next/navigation'

import * as z from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextareaAutosize from 'react-textarea-autosize'

import '@/styles/editor.css'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'
import { toast } from '@/components/ui/use-toast'
import { buttonVariants } from '@/components/ui/button'
import { postPatchSchema } from '@/lib/validations/post'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
interface EditorProps {
  post: Pick<
    Post,
    | 'id'
    | 'title'
    | 'description'
    | 'content'
    | 'published'
    | 'jobType'
    | 'jobRole'
    | 'salaryRange'
    | 'location'
  >
}

type FormData = z.infer<typeof postPatchSchema>

export function Editor({ post }: EditorProps) {
  const methods = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  const { register, handleSubmit, control } = useForm<FormData>({
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

    const body = postPatchSchema.parse({
      ...post,
      description: post.description ?? 'Default Description', // Provide a default value if description is null or too short
      jobType: post.jobType ?? '', // Provide a default value if jobType is null
      salaryRange: post.salaryRange ?? '', // Provide a default value if salaryRange is null
      location: post.location ?? '', // Provide a default value if location is null
    })

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
    // console.log(data)
    try {
      setIsSaving(true)

      // Save the editor blocks
      const blocks = await ref.current?.save()

      const { title, description } = data
      const jobType = data.jobType || '' // Provide default value if null
      const jobRole = data.jobRole || '' // Provide default value if null
      const salaryRange = data.salaryRange || '' // Provide default value if null
      const location = data.location || '' // Provide default value if null

      // Preparing the data to be sent in the PATCH request
      const postData = {
        title,
        description,
        content: blocks,
        jobType,
        jobRole,
        salaryRange,
        location,
      }

      console.log('Data to be sent:', postData)

      // Sending the PATCH request to update the post
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

      // Show an error message if everything fails
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
    <FormProvider {...methods}>
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

            <div className='flex flex-col items-center gap-8 lg:flex-row'>
              <TextareaAutosize
                autoFocus
                id='description'
                defaultValue={post.description as any}
                placeholder='Enter Short Description'
                className='mt-8 w-full resize-none appearance-none overflow-hidden bg-transparent text-xl font-semibold focus:outline-none'
                {...register('description')}
              />

              <FormField
                control={control}
                name='jobType'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={post.jobType ?? ''}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Job Type' />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='Full Time'>Full-Time</SelectItem>
                        <SelectItem value='Part Time'>Part Time</SelectItem>
                        <SelectItem value='Internship'>Internship</SelectItem>
                        <SelectItem value='system'>
                          Contract / Founder
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className='my-8 flex flex-col justify-between gap-8 lg:flex-row'>
              <FormField
                control={control}
                name='jobRole'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={post.jobRole ?? ''}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Job Roles' />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='Programming'>Programming</SelectItem>
                        <SelectItem value='Design'>Design</SelectItem>
                        <SelectItem value='Management Finance'>
                          Management Finance
                        </SelectItem>
                        <SelectItem value='Customer Support'>
                          Customer Support
                        </SelectItem>
                        <SelectItem value='Sales or Marketing'>
                          Sales or Marketing
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='salaryRange'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={post.salaryRange ?? ''}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Job Salary' />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='$20K - $50K'>$20K - $50K</SelectItem>
                        <SelectItem value='$50K - $100K'>
                          $50K - $100K
                        </SelectItem>
                        <SelectItem value='&gt; $100K'>&gt; $100K</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={post.location ?? ''}
                    >
                      <FormControl>
                        <SelectTrigger className='w-[180px]'>
                          <SelectValue placeholder='Location' />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='New York'>New York</SelectItem>
                        <SelectItem value='Los Angels'>Los Angels</SelectItem>
                        <SelectItem value='Chicago'>Chicago</SelectItem>
                        <SelectItem value='Houston'>Houston</SelectItem>
                        <SelectItem value='Kampala'>Kampala</SelectItem>
                        <SelectItem value='Gulu'>Gulu</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

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
    </FormProvider>
  )
}
