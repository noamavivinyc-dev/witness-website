import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { formType, email, name, contactName, organizationName, ...rest } = body

    const contactName_resolved = name || contactName || organizationName || 'Unknown'

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('Missing env:', { supabaseUrl: !!supabaseUrl, serviceRoleKey: !!serviceRoleKey })
      return NextResponse.json({ error: 'Server config error' }, { status: 500 })
    }

    const headers = {
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    }

    const contactType = formType === 'newsroom' ? 'newsroom' : 'general_user'

    // Step 1: Try to insert the contact
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/contacts`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        name: contactName_resolved,
        contact_type: contactType,
        last_submission_at: new Date().toISOString(),
      }),
    })

    let contactId: string

    if (insertResponse.ok) {
      const insertData = await insertResponse.json()
      contactId = insertData[0]?.id
      if (!contactId) {
        throw new Error('No contact ID returned from insert')
      }
    } else {
      const insertError = await insertResponse.json()

      // Duplicate email (23505) — update existing and get its id
      if (insertError.code === '23505') {
        const updateResponse = await fetch(
          `${supabaseUrl}/rest/v1/contacts?email=eq.${encodeURIComponent(email)}`,
          {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
              name: contactName_resolved,
              contact_type: contactType,
              last_submission_at: new Date().toISOString(),
            }),
          }
        )

        if (!updateResponse.ok) {
          const updateError = await updateResponse.json()
          throw new Error(`Failed to update contact: ${updateError.message}`)
        }

        const updatedData = await updateResponse.json()
        contactId = updatedData[0]?.id

        if (!contactId) {
          // Fallback: fetch the contact id directly
          const getResponse = await fetch(
            `${supabaseUrl}/rest/v1/contacts?email=eq.${encodeURIComponent(email)}&select=id`,
            { headers }
          )
          const getData = await getResponse.json()
          contactId = getData[0]?.id
          if (!contactId) {
            throw new Error('Could not find or create contact')
          }
        }
      } else {
        throw new Error(insertError.message || `Insert failed: ${insertResponse.status}`)
      }
    }

    // Step 2: Store submission
    const submissionResponse = await fetch(`${supabaseUrl}/rest/v1/submissions`, {
      method: 'POST',
      headers: { ...headers, 'Prefer': 'return=minimal' },
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
      console.error('Submission insert failed:', await submissionResponse.text())
    }

    return NextResponse.json(
      { success: true, message: 'Thank you for your submission!' },
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
