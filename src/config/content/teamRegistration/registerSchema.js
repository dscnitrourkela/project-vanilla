import { z } from 'zod'

export const RegistrationSchema = z.object({
  alcheID: z.string().min(1, 'Alche ID is required'),
  EventId: z.number().min(1, 'Event ID is required')
})

export const TeamRegistrationSchema = z.object({
  teamname: z.string().min(1, 'Team Name is required'),
  teamleadid: z.string().min(1, 'Team Lead ID is required'),
  m1id: z.string().min(1, 'Member 1 ID is required'),
  m2id: z.string().min(1, 'Member 2 ID is required'),
  m3id: z.string().min(1, 'Member 3 ID is required')
})
