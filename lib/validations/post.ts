import * as z from 'zod'

export const postPatchSchema = z.object({
  title: z.string().min(3).max(128).optional(),

  description: z.string().min(3).max(500).optional(),

  jobType: z.string().optional(),

  jobRole: z.string().optional(),

  salaryRange: z.string().optional(),

  location: z.string().optional(),

  company_name: z.string().optional(),

  company_website: z.string().trim().url().optional(),

  company_salary_range: z.string().optional(),

  company_location: z.string().optional(),

  application_link: z.string().trim().url().optional(),

  isFeatured: z.boolean().optional(),

  content: z.any().optional(),
})
