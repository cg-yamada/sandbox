import { z } from "zod"

export const CreateContentFormSchema = z.object({
  title: z.string(),
  image: z.string(),
  tag: z.string(),
})

export type CreateContentFormInput = z.infer<typeof CreateContentFormSchema>
