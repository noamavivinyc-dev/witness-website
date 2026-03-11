# Witness Website

Real-time, map-based citizen journalism platform. Public-facing website with waitlist, newsroom, and contact forms.

## Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- Git
- A Supabase account (we created the database schema)
- A Resend account (free tier fine)

### Environment Setup

1. **Copy environment variables:**
   ```bash
   cp .env.local.example .env.local
   ```

   Make sure `.env.local` contains:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://mdowgalvrqyhsekibzbe.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=[your service role key]
   RESEND_API_KEY=[your resend api key]
   ADMIN_EMAIL_1=noam@thewitnessapp.com
   ADMIN_EMAIL_2=contact@thewitnessapp.com
   NEXT_PUBLIC_SITE_URL=https://thewitnessapp.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

   Visit: http://localhost:3000

## Database Setup (One-Time)

1. Go to [Supabase Dashboard](https://supabase.com/dashboard/)
2. Open your project: `mdowgalvrqyhsekibzbe`
3. Click **SQL Editor** (left sidebar)
4. Click **New Query**
5. Copy the entire contents of `supabase-migration.sql`
6. Paste into the SQL editor
7. Click **Run**

Done! The `contacts`, `submissions`, and `email_logs` tables are now created.

## Deploying to Vercel

### 1. Create Vercel Account

- Go to [vercel.com](https://vercel.com/signup)
- Sign up with GitHub (recommended)

### 2. Connect GitHub Repository

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/witness-website
   git push -u origin main
   ```

2. In Vercel Dashboard:
   - Click **Add New** → **Project**
   - Select your GitHub repository
   - Click **Import**

### 3. Add Environment Variables

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add these variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://mdowgalvrqyhsekibzbe.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=[paste your service role key]
   RESEND_API_KEY=[paste your resend api key]
   ADMIN_EMAIL_1=noam@thewitnessapp.com
   ADMIN_EMAIL_2=contact@thewitnessapp.com
   NEXT_PUBLIC_SITE_URL=https://thewitnessapp.com
   ```

3. Click **Save**

### 4. Deploy

- Vercel automatically deploys when you push to `main`
- Get your staging URL from Vercel (looks like: `https://witness-website-xyz.vercel.app`)
- Test forms before pointing domain

### 5. Point Your Domain

1. In Vercel project settings: **Domains**
2. Add `thewitnessapp.com`
3. Vercel will give you nameserver instructions
4. Go to your domain registrar and update nameservers
5. Wait 15-30 minutes for DNS to propagate

## Form Workflow

When a user submits a form:

1. **Validation** — Zod schema validates input
2. **Database** — Submission + contact stored in Supabase
3. **Confirmation Email** — User gets confirmation (via Resend)
4. **Admin Alert** — You get notification at `noam@thewitnessapp.com` and `contact@thewitnessapp.com`
5. **Contact Management** — Contact deduplicated and stored in Supabase

View submissions:
- **Supabase Dashboard** → SQL Editor → `SELECT * FROM submissions;`
- **Resend Dashboard** → See sent emails

## Key Files

```
witness-website/
├── app/
│   ├── page.tsx          ← Main home page
│   ├── home.tsx          ← Home component with sections
│   ├── layout.tsx        ← App-level metadata
│   ├── styles.css        ← Global styles
│   ├── api/
│   │   └── submit/       ← Form submission handler
│   └── sitemap.ts        ← SEO sitemap
│
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Ticker.tsx
│   ├── Footer.tsx
│   ├── FormModal.tsx
│   └── forms/
│       ├── WaitlistForm.tsx
│       ├── NewsroomForm.tsx
│       └── ContactForm.tsx
│
├── lib/
│   ├── supabase.ts       ← Supabase client
│   ├── email.ts          ← Email service (Resend)
│   └── schemas.ts        ← Form validation (Zod)
│
├── public/
│   └── robots.txt        ← SEO robots
│
├── .env.local            ← Environment (DO NOT COMMIT)
├── .gitignore            ← Ignore .env
├── package.json
├── tsconfig.json
├── next.config.js
└── supabase-migration.sql ← Database schema
```

## Testing Forms Locally

1. Run `npm run dev`
2. Visit http://localhost:3000
3. Click "Get Access" button
4. Fill out the form and submit
5. Check:
   - Terminal for any errors
   - Resend dashboard for confirmation email
   - Supabase for stored submission

## Troubleshooting

### Form submission fails with "Failed to send confirmation email"

- Check Resend API key in `.env.local`
- Verify domain is verified in Resend dashboard
- Check Resend logs: https://dashboard.resend.com/logs

### Submissions not appearing in Supabase

- Check Supabase SQL editor: `SELECT * FROM submissions;`
- Verify service role key is correct
- Check browser console for errors

### Forms look broken/unstyled

- Run `npm install` to ensure all packages installed
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check that styles.css is imported in `app/layout.tsx`

## Next Steps

1. **Go live:**
   - Update DNS to point to Vercel
   - Test that thewitnessapp.com loads the new site

2. **Monitor:**
   - Check Supabase dashboard daily for new submissions
   - Monitor Resend for email delivery
   - Set up Gmail rules to organize alerts from `noreply@thewitnessapp.com`

3. **Future enhancements:**
   - Add more form types (contributors, investors, etc.)
   - Build admin dashboard to manage submissions
   - Add blog section
   - Integrate with Mailchimp for email marketing campaigns

## Support

Questions or issues? Check:
- Next.js docs: https://nextjs.org/docs
- Supabase docs: https://supabase.com/docs
- Resend docs: https://resend.com/docs
