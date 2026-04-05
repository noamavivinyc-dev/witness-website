import 'server-only'

import { Resend } from 'resend'
import { siteConfig } from '@/lib/seo'
import { escapeHtml } from '@/lib/security'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendConfirmationEmail(email: string, formType: string) {
  const subject = {
    waitlist: 'Welcome to Witness Waitlist',
    newsroom: 'Newsroom Access Request Received',
    partner: 'Partnership Inquiry Received',
    contact: 'We Received Your Message',
  }[formType] || 'Thank You'

  const message = {
    waitlist: 'You\'ve been added to the Witness waitlist. We\'ll notify you as soon as access opens.',
    newsroom: 'Thank you for your interest. Our newsroom team will review your request and be in touch within 2–3 business days.',
    partner: 'We\'ve received your partnership inquiry. Someone from our team will reach out shortly.',
    contact: 'Thank you for reaching out. We\'ll get back to you as soon as possible.',
  }[formType] || 'Thank you for your submission.'

  try {
    await resend.emails.send({
      from: 'Witness <noreply@thewitnessapp.com>',
      to: email,
      subject,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #2C2820; margin-bottom: 16px;">History is happening now.</h2>
          <p style="color: #4A453F; line-height: 1.6; margin-bottom: 16px;">${escapeHtml(message)}</p>
          <p style="color: #8A857D; font-size: 14px;">— The Witness Team</p>
          <hr style="border: none; border-top: 1px solid #CEC9BC; margin: 32px 0;" />
          <p style="color: #8A857D; font-size: 12px;">
            Don't want emails from Witness? <a href="${siteConfig.url}/unsubscribe" style="color: #E8440A;">Unsubscribe</a>
          </p>
        </div>
      `,
    })
    return { success: true }
  } catch (error) {
    console.error('Failed to send confirmation email:', error)
    return { success: false, error }
  }
}

export async function sendAdminAlert(formType: string, contactName: string, contactEmail: string, details: any) {
  const adminEmails = [
    process.env.ADMIN_EMAIL_1,
    process.env.ADMIN_EMAIL_2,
  ].filter(Boolean)

  const subject = `New ${formType.replace('_', ' ')} submission: ${contactName}`
  const safeDetails = escapeHtml(JSON.stringify(details, null, 2))
  
  const html = `
    <div style="font-family: monospace; background: #F2EFE9; padding: 20px; border-radius: 4px;">
      <h3>New Form Submission</h3>
      <p><strong>Type:</strong> ${escapeHtml(formType)}</p>
      <p><strong>Name:</strong> ${escapeHtml(contactName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(contactEmail)}</p>
      <pre style="background: white; padding: 12px; overflow-x: auto;">
${safeDetails}
      </pre>
      <p><a href="https://supabase.com/dashboard/project/mdowgalvrqyhsekibzbe/editor" style="color: #E8440A;">View in Supabase</a></p>
    </div>
  `

  try {
    for (const email of adminEmails) {
      if (email) {
        await resend.emails.send({
          from: 'Witness <noreply@thewitnessapp.com>',
          to: email,
          subject,
          html,
        })
      }
    }
    return { success: true }
  } catch (error) {
    console.error('Failed to send admin alert:', error)
    return { success: false, error }
  }
}
