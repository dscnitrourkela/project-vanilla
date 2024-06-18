import { z } from 'zod'

const isImageFile = (file) => {
  const allowedExtensions = /\.(jpg|jpeg|png|gif)$/i
  return allowedExtensions.test(file.name)
}

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().refine((value) => value.length === 10, {
    message: 'Phone number must be 10 digits long'
  }),
  aicheID: z.string().min(1, 'AICHE ID is required'),
  college: z.string().min(1, 'College Name is required'),
  rollNo: z.string().min(1, 'Roll number is required'),
  idCard: z.instanceof(File).refine(
    (file) => {
      return file !== null && file !== undefined && isImageFile(file)
    },
    {
      message: 'ID Card must be a valid image file (jpg, jpeg, png, gif)'
    }
  ),
  tShirtSize: z.string().min(1, 'T-Shirt size is required')
})
