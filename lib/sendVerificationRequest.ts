import { resend } from './resend'
import MagicLinkEmail from '@/emails/MagicLinkEmail'

export async function sendVerificationRequest(params: any) {
  const { identifier: email, url, token } = params

  // console.log(email, url, token)

  try {
    const data = await resend.emails.send({
      from: 'info@mosespace.com',
      to: [email],
      subject: `Confirm Your Email Address`,
      // text: text({ url, host }) as string, // Add type annotation
      react: MagicLinkEmail({ url } as any),
    } as any)

    console.log(data)
    return { success: true, data }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to send verification Email')
  }
}
