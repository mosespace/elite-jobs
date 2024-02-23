import { resend } from './resend'
import MagicLinkEmail from '@/emails/MagicLinkEmail'

export async function sendVerificationRequest(params: any) {
  const { identifier, url, provider } = params
  const { host } = new URL(url)

  // console.log(identifier, url, provider, text)

  try {
    const data = await resend.emails.send({
      from: 'mosespace@mosespace.com',
      to: [identifier],
      subject: `Log in to ${host}`,
      // text: text({ url, host }) as string, // Add type annotation
      react: MagicLinkEmail({ url, host } as any),
    })

    console.log(data)
    return { success: true, data }
  } catch (error) {
    console.log(error)
    // throw new Error('Failed to send verification Email')
  }
}
