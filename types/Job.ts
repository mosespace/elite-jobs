export type Job = {
  id: number
  title: string
  slug: string
  company: string
  content: string
  datePosted: string
  isFeatured: boolean
  location: string
  salaryRange: string
}

interface Block {
  // Define properties of Block object if needed
}

export type DetailedJob = {
  id: string
  title: string
  slug: string
  description: string
  jobType: string
  jobRole: string
  salaryRange: string
  location: string
  company_name: string
  company_location: string
  company_salary_range: string
  company_website: string
  application_link: string
  content: {
    time: number // Assuming time is a number
    blocks: Block[] // Assuming blocks is an array of Block objects
    version: string // Assuming version is a string
  }
  published: string
  isFeatured: string
  createdAt: Date
  updatedAt: Date
  authorId: string
}
