import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
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
    // Check credentials INSIDE the function, not at import time
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing env vars:', { supabaseUrl: !!supabaseUrl, supabaseServiceKey: !!supabaseServiceKey })
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Create client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

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

    // Check if contact exists
    const { data: existingContact, error: selectError } = await supabase
      .from('contacts')
      .select('id, contact_type')
      .eq('email', email)
      .maybeSingle()

    if (selectError) {
      console.error('Select error:', selectError)
      throw new Error(`Failed to check contact: ${selectError.message}`)
    }

    let contactId: string

    if (existingContact?.id) {
      // Update existing contact
      contactId = existingContact.id
      const { error: updateError } = await supabase
        .from('contacts')
        .update({
          name,
          contact_type: mapFormTypeToContactType(formType),
          last_submission_at: new Date().toISOString(),
        })
        .eq('id', contactId)

      if (updateError) {
        throw new Error(`Failed to update contact: ${updateError.message}`)
      }
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
        console.error('Insert error:', insertError)
        throw new Error(`Failed to create contact: ${insertError.message}`)
      }

      contactId = newContact!.id
    }

    // Store submission
    const { error: submitError } = await supabase.from('submissions').insert({
      contact_id: contactId,
      form_type: formType,
      form_data: validated,
      ip_address: req.headers.get('x-forwarded-for') || 'unknown',
      user_agent: req.headers.get('user-agent') || '',
      source_url: req.headers.get('referer') || '',
    })

    if (submitError) {
      throw new Error(`Failed to store submission: ${submitError.message}`)
    }

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
