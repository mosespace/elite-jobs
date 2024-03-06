import { toast } from '@/components/ui/use-toast'

export async function makePostRequest(
  setLoading: (value: boolean) => void,
  endpoint: string,
  data: any,
  resourceName: string,
  reset: any,
  redirect: any,
  method = 'POST', // Default method is POST
) {
  try {
    setLoading(true)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setLoading(false)
      const successMessage: any =
        method === 'POST'
          ? `New ${resourceName} Created Successfully`
          : ` ${resourceName} Updated Successfully`

      toast({
        title: 'Created Successfully',
        description: `New ${resourceName} Created Successfully`,
        variant: 'destructive',
      })

      reset()
      redirect()
    } else {
      setLoading(false)
      if (response.status === 409) {
        return toast({
          title: "The Network Isn't Stable",
          description:
            'Try checking your internet/network to make sure your connected on a stable network',
          variant: 'destructive',
        })
      } else {
        return toast({
          title: 'Something went wrong.',
          description: 'Something went wrong. Please try again.',
          variant: 'destructive',
        })
      }
    }
  } catch (error) {
    setLoading(false)
    console.error(error)
    return toast({
      title: 'Failed to make request',
      description: 'Your sign in request failed. Please try again.',
      variant: 'destructive',
    })
  }
}
