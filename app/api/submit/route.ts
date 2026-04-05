import { NextRequest, NextResponse } from 'next/server'
import { ZodSchema } from 'zod'
import { contactSchema, formTypeSchema, newsroomSchema, waitlistSchema } from '@/lib/schemas'
import {
  exceedsContentLengthLimit,
  getClientIp,
  getSourcePath,
  isAllowedOrigin,
  isRateLimited,
  isValidJsonRequest,
  normalizePayload,
} from '@/lib/security'
import { getServiceSupabase } from '@/lib/supabase'

export const runtime = 'nodejs'

const formSchemas: Record<
  ReturnType<typeof formTypeSchema.parse>,
  ZodSchema<Record<string, unknown>>
> = {
  waitlist: waitlistSchema as ZodSchema<Record<string, unknown>>,
  newsroom: newsroomSchema as ZodSchema<Record<string, unknown>>,
  contact: contactSchema as ZodSchema<Record<string, unknown>>,
}

function getContactDetails(formType: keyof typeof formSchemas, parsedForm: Record<string, unknown>) {
  switch (formType) {
    case 'newsroom':
      return {
        contactName: String(parsedForm.contactName),
        organization: String(parsedForm.organizationName),
        contactType: 'newsroom',
        consentMarketing: Boolean(parsedForm.consentFollowUp),
        consentProductUpdates: false,
      }
    case 'contact':
      return {
        contactName: String(parsedForm.name),
        organization:
          typeof parsedForm.organization === 'string' ? parsedForm.organization : undefined,
        contactType: 'general_user',
        consentMarketing: Boolean(parsedForm.consentFollowUp),
        consentProductUpdates: false,
      }
    case 'waitlist':
    default:
      return {
        contactName: String(parsedForm.name),
        organization: undefined,
        contactType: 'general_user',
        consentMarketing: false,
        consentProductUpdates: Boolean(parsedForm.consentUpdates),
      }
  }
}

export async function POST(req: NextRequest) {
  const clientIp = getClientIp(req)

  try {
    if (!isValidJsonRequest(req)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 415 })
    }

    if (exceedsContentLengthLimit(req)) {
      return NextResponse.json({ error: 'Submission too large' }, { status: 413 })
    }

    if (!isAllowedOrigin(req)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    if (isRateLimited(clientIp)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const body = normalizePayload(await req.json())

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    const formTypeResult = formTypeSchema.safeParse(body.formType)
    if (!formTypeResult.success) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 })
    }

    const honeypotValue =
      typeof body.companyWebsite === 'string' ? body.companyWebsite.trim() : ''
    if (honeypotValue) {
      return NextResponse.json({ success: true, message: 'Thank you for your submission!' })
    }

    const formType = formTypeResult.data
    const parsedFormResult = formSchemas[formType].safeParse(body)

    if (!parsedFormResult.success) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 })
    }

    const parsedForm = parsedFormResult.data
    const email = String(parsedForm.email)
    const { contactName, organization, contactType, consentMarketing, consentProductUpdates } =
      getContactDetails(formType, parsedForm)
    const sourcePath = getSourcePath(req)
    const supabase = getServiceSupabase()

    const { data: contactData, error: contactError } = await supabase
      .from('contacts')
      .upsert(
        {
          email,
          name: contactName,
          organization,
          contact_type: contactType,
          consent_marketing: consentMarketing,
          consent_product_updates: consentProductUpdates,
          source_page: sourcePath || null,
          last_submission_at: new Date().toISOString(),
        },
        {
          onConflict: 'email',
          ignoreDuplicates: false,
        }
      )
      .select('id')
      .single()

    if (contactError || !contactData?.id) {
      console.error('Failed to upsert contact', {
        message: contactError?.message,
        formType,
      })
      return NextResponse.json({ error: 'Unable to process submission' }, { status: 500 })
    }

    const { error: submissionError } = await supabase.from('submissions').insert({
      contact_id: contactData.id,
      form_type: formType,
      form_data: parsedForm,
      ip_address: clientIp,
      user_agent: (req.headers.get('user-agent') || '').slice(0, 512),
      source_url: sourcePath,
    })

    if (submissionError) {
      console.error('Failed to store submission', {
        message: submissionError.message,
        formType,
        contactId: contactData.id,
      })
      return NextResponse.json({ error: 'Unable to process submission' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your submission!',
    })
  } catch (error) {
    console.error('Form submission error', {
      message: error instanceof Error ? error.message : 'Unknown error',
      clientIp,
    })

    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
