import { z } from 'zod'

const trimmedString = (max: number, min = 0) =>
  z.string().trim().min(min).max(max)

const optionalTrimmedString = (max: number) =>
  z.string().trim().max(max).optional().or(z.literal(''))

export const formTypeSchema = z.enum(['waitlist', 'newsroom', 'contact'])

export const waitlistSchema = z.object({
  name: trimmedString(100, 2),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  region: optionalTrimmedString(100),
  userType: z.enum(['journalist', 'researcher', 'news_junkie', 'eyewitness', 'other']).optional(),
  interestArea: optionalTrimmedString(150),
  message: optionalTrimmedString(500),
  consentUpdates: z.boolean().default(true),
})

export const newsroomSchema = z.object({
  organizationName: trimmedString(150, 2),
  contactName: trimmedString(100, 2),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  workEmail: z.string().trim().toLowerCase().email('Please enter a valid work email').optional().or(z.literal('')),
  regionFocus: optionalTrimmedString(100),
  organizationSize: z.enum(['small', 'medium', 'large']).optional(),
  useCase: trimmedString(500, 10),
  message: optionalTrimmedString(500),
  consentFollowUp: z.boolean().default(true),
})

export const partnerSchema = z.object({
  name: trimmedString(100, 2),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  category: z.enum(['ngo', 'researcher', 'investor', 'media', 'partner', 'other']),
  organization: optionalTrimmedString(150),
  message: trimmedString(1000, 10),
  consentFollowUp: z.boolean().default(true),
})

export const contactSchema = z.object({
  name: trimmedString(100, 2),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  category: z.enum(['partnership', 'investment', 'media', 'other']),
  organization: optionalTrimmedString(150),
  message: trimmedString(1000, 10),
  consentFollowUp: z.boolean().default(false),
})

export type WaitlistInput = z.infer<typeof waitlistSchema>
export type NewsroomInput = z.infer<typeof newsroomSchema>
export type PartnerInput = z.infer<typeof partnerSchema>
export type ContactInput = z.infer<typeof contactSchema>
