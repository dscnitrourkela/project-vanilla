import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().refine((value) => value.length === 10, {
    message: 'Phone number must be 10 digits long'
  }),
  aicheRegID: z.string().min(1, 'AICHE ID is required'),
  college: z.string().min(1, 'College Name is required'),
  rollNumber: z.string().min(1, 'Roll number is required'),
  idCardPhoto: z
    .instanceof(File)
    .or(z.null())
    .refine((value) => value !== null, {
      message: 'ID Card is required'
    }),
  tSize: z.string().min(1, 'T-Shirt size is required')
})
