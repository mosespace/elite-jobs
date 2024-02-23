import { resend } from './resend'
import MagicLinkEmail from '@/emails/MagicLinkEmail'

export async function sendVerificationRequest(params: any) {
  const { identifier: email, url, token } = params
  const { host } = new URL(url)

  // console.log(identifier, host, provider)

  const baseUrl = process.env.NEXTAUTH_URL

  const link = `${baseUrl}/login?callbackUrl=${encodeURIComponent(url)}&token=${encodeURIComponent(
    token,
  )}&email=${encodeURIComponent(email)}`

  try {
    const data = await resend.emails.send({
      from: 'info@mosespace.com',
      to: [email],
      subject: `Confirm Your Email Address`,
      // text: text({ url, host }) as string, // Add type annotation
      react: MagicLinkEmail({ url: link } as any),
    } as any)

    console.log(data)
    return { success: true, data }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to send verification Email')
  }
}
