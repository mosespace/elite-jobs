export default async function getData(endpoint: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    const response = await fetch(`https://${baseUrl}/api/${endpoint}`, {
      cache: 'no-store',
    })
    const data = await response?.json()
    // console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
}
