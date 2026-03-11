import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, email, name, contactName, organizationName, ...rest } = body

    // Determine the name from whichever field is populated
    const contactName_resolved = name || contactName || organizationName || 'Unknown'

    // Get credentials from environment
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('Missing env:', { supabaseUrl: !!supabaseUrl, serviceRoleKey: !!serviceRoleKey })
      return NextResponse.json({ error: 'Server config error' }, { status: 500 })
    }

    console.log('Using Supabase URL:', supabaseUrl)
    console.log('Service role key present:', !!serviceRoleKey)

    // Insert into contacts table via REST API
    const insertUrl = `${supabaseUrl}/rest/v1/contacts`
    console.log('Inserting to:', insertUrl)

    const insertResponse = await fetch(insertUrl, {
      method: 'POST',
      headers: {
        'apikey': serviceRoleKey,
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
      },
      body: JSON.stringify({
        email,
        name: contactName_resolved,
        contact_type: formType === 'newsroom' ? 'newsroom' : 'general_user',
        last_submission_at: new Date().toISOString(),
      }),
    })

    console.log('Insert response status:', insertResponse.status)
    const insertData = await insertResponse.json()
    console.log('Insert response:', insertData)

    if (!insertResponse.ok) {
      throw new Error(insertData.message || `Insert failed: ${insertResponse.status}`)
    }

    const contactId = insertData[0]?.id

    if (!contactId) {
      throw new Error('No contact ID returned from insert')
    }

    console.log('Created contact:', contactId)

    // Insert into submissions table
    const submissionUrl = `${supabaseUrl}/rest/v1/submissions`
    const submissionResponse = await fetch(submissionUrl, {
      method: 'POST',
      headers: {
        'apikey': serviceRoleKey,
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact_id: contactId,
        form_type: formType,
        form_data: { email, name: contactName_resolved, ...rest },
        ip_address: req.headers.get('x-forwarded-for') || 'unknown',
        user_agent: req.headers.get('user-agent') || '',
        source_url: req.headers.get('referer') || '',
      }),
    })

    console.log('Submission response status:', submissionResponse.status)
    const submissionData = await submissionResponse.json()
    console.log('Submission response:', submissionData)

    if (!submissionResponse.ok) {
      throw new Error(submissionData.message || `Submission failed: ${submissionResponse.status}`)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission!',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Form submission error:', error.message)
    return NextResponse.json(
      { error: error?.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
