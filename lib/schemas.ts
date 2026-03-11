import { z } from 'zod'

export const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  region: z.string().optional(),
  userType: z.enum(['journalist', 'researcher', 'news_junkie', 'eyewitness', 'other']).optional(),
  interestArea: z.string().optional(),
  message: z.string().max(500, 'Message must be under 500 characters').optional(),
  consentUpdates: z.boolean().default(true),
})

export const newsroomSchema = z.object({
  organizationName: z.string().min(2, 'Organization name is required'),
  contactName: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  workEmail: z.string().email('Please enter a valid work email').optional(),
  regionFocus: z.string().optional(),
  organizationSize: z.enum(['small', 'medium', 'large']).optional(),
  useCase: z.string().max(500, 'Use case must be under 500 characters'),
  message: z.string().max(500, 'Message must be under 500 characters').optional(),
  consentFollowUp: z.boolean().default(true),
})

export const partnerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  category: z.enum(['ngo', 'researcher', 'investor', 'media', 'partner', 'other']),
  organization: z.string().optional(),
  message: z.string().min(10, 'Please tell us more about your inquiry').max(1000),
  consentFollowUp: z.boolean().default(true),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  consentFollowUp: z.boolean().default(false),
})

export type WaitlistInput = z.infer<typeof waitlistSchema>
export type NewsroomInput = z.infer<typeof newsroomSchema>
export type PartnerInput = z.infer<typeof partnerSchema>
export type ContactInput = z.infer<typeof contactSchema>
