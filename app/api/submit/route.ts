import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, email, name, contactName, organizationName, ...rest } = body

    // Determine the name from whichever field is populated
    const contactName_resolved = name || contactName || organizationName || 'Unknown'

    // Call Supabase REST API directly with service role key
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json({ error: 'Server config error' }, { status: 500 })
    }

    // Insert into contacts table via REST API
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
      method: 'POST',
      headers: {
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

    const insertData = await insertResponse.json()

    if (!insertResponse.ok) {
      console.error('Insert failed:', insertData)
      throw new Error(insertData.message || 'Failed to insert contact')
    }

    const contactId = insertData[0]?.id

    if (!contactId) {
      throw new Error('No contact ID returned')
    }

    // Insert into submissions table
    const submissionResponse = await fetch(`${supabaseUrl}/rest/v1/submissions`, {
      method: 'POST',
      headers: {
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

    if (!submissionResponse.ok) {
      const error = await submissionResponse.json()
      console.error('Submission failed:', error)
      throw new Error(error.message || 'Failed to store submission')
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission!',
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error?.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
