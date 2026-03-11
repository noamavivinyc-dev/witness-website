import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, email, name, ...rest } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if contact exists
    const { data: existing } = await supabase
      .from('contacts')
      .select('id')
      .eq('email', email)
      .maybeSingle()

    let contactId: string

    if (existing?.id) {
      contactId = existing.id
    } else {
      const { data: newContact, error: insertError } = await supabase
        .from('contacts')
        .insert({
          email,
          name: name || 'Unknown',
          contact_type: formType,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select('id')
        .single()

      if (insertError) {
        throw insertError
      }

      contactId = newContact.id
    }

    // Store submission
    const { error: submitError } = await supabase
      .from('submissions')
      .insert({
        contact_id: contactId,
        form_type: formType,
        form_data: { email, name, ...rest },
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
        user_agent: req.headers.get('user-agent') || '',
        source_url: req.headers.get('referer') || '',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })

    if (submitError) {
      throw submitError
    }

    return NextResponse.json(
      { success: true, message: 'Thank you! Check your email.' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error?.message || 'Submission failed' },
      { status: 500 }
    )
  }
}
