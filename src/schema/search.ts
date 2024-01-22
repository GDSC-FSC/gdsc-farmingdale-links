import { z } from 'zod'

export const searchSchema = z.object({
  search: z.string().min(1),
})

export type Search = z.infer<typeof searchSchema>
