import { z } from "zod"

export const CreateComicFormSchema = z.object({
  title: z.string(),
  image: z.string(),
  tag: z.string(),
})

export type CreateComicFormInput = z.infer<typeof CreateComicFormSchema>
