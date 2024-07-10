import { z } from 'zod'

export const RegistrationSchema = z.object({
  aicheID: z.string().min(24, 'Invalid Aiche ID').regex(/.*-.*/, 'Invalid Aiche ID'),
  eventID: z.string().min(1, 'Event ID is required')
})

export const TeamRegistrationSchema = z.object({
  teamname: z.string().min(1, 'Team Name is required'),
  teamleadid: z.string().min(1, 'Team Lead ID is required'),
  userIds: z.array(z.string().min(1, 'Member ID is required').regex(/.*-.*/, 'Invalid Aiche ID'))
})
