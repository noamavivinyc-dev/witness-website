import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendConfirmationEmail, sendAdminAlert } from '@/lib/email'
import {
  waitlistSchema,
  newsroomSchema,
  partnerSchema,
  contactSchema,
} from '@/lib/schemas'

const schemas: Record<string, any> = {
  waitlist: waitlistSchema,
  newsroom: newsroomSchema,
  partner: partnerSchema,
  contact: contactSchema,
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, ...formData } = body

    // Validate form type
    if (!schemas[formType]) {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

    // Validate form data
    const validated = schemas[formType].parse(formData)
    const email = validated.email
    const name = validated.name || validated.contactName || validated.organizationName

    // Check if contact exists - use maybeSingle() instead of single()
    const { data: existingContact, error: selectError } = await supabase
      .from('contacts')
      .select('id, contact_type')
      .eq('email', email)
      .maybeSingle()

    let contactId: string

    if (existingContact?.id) {
      // Update existing contact
      contactId = existingContact.id
      await supabase
        .from('contacts')
        .update({
          name,
          contact_type: mapFormTypeToContactType(formType),
          last_submission_at: new Date().toISOString(),
        })
        .eq('id', contactId)
    } else {
      // Create new contact
      const { data: newContact, error: insertError } = await supabase
        .from('contacts')
        .insert({
          email,
          name,
          contact_type: mapFormTypeToContactType(formType),
          last_submission_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (insertError) {
        throw new Error(`Failed to create contact: ${insertError.message}`)
      }

      contactId = newContact!.id
    }

    // Store submission
    await supabase.from('submissions').insert({
      contact_id: contactId,
      form_type: formType,
      form_data: validated,
      ip_address: req.headers.get('x-forwarded-for') || 'unknown',
      user_agent: req.headers.get('user-agent') || '',
      source_url: req.headers.get('referer') || '',
    })

    // Send confirmation email to user
    await sendConfirmationEmail(email, formType)

    // Send admin alert
    await sendAdminAlert(formType, name, email, validated)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. Check your email for confirmation.',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Form submission error:', error)

    // Return validation error details if from Zod
    if (error.name === 'ZodError') {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: error?.message || 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

function mapFormTypeToContactType(formType: string): string {
  const mapping: Record<string, string> = {
    waitlist: 'general_user',
    newsroom: 'newsroom',
    partner: 'partner',
    contributor: 'contributor',
    contact: 'general_user',
  }
  return mapping[formType] || 'general_user'
}
