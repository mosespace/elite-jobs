import * as z from 'zod'

export const postPatchSchema = z.object({
  title: z.string().min(3).max(128).optional(),

  description: z.string().min(3).max(150).optional(),

  jobType: z.string().optional(),
  
  jobRole: z.string().optional(),
  
  salaryRange: z.string().optional(),
  
  location: z.string().optional(),
  
  content: z.any().optional(),
})
