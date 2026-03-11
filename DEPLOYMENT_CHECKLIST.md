# Witness Website — Deployment Checklist

## Status: Ready to Deploy ✓

Your website is fully built and ready to go live. Follow this checklist.

---

## STEP 1: Verify Supabase Database (5 min)

- [ ] Go to https://supabase.com/dashboard/project/mdowgalvrqyhsekibzbe/editor
- [ ] Click **SQL Editor**
- [ ] Click **New Query**
- [ ] Paste the entire contents of `supabase-migration.sql` 
- [ ] Click **Run**
- [ ] Verify tables appear: `contacts`, `submissions`, `email_logs`

**Status Check:**
```sql
SELECT * FROM contacts;
SELECT * FROM submissions;
SELECT * FROM email_logs;
```

---

## STEP 2: Verify Resend Setup (5 min)

- [ ] Go to https://resend.com/dashboard
- [ ] Click **API Keys** → Verify you have an active API key
- [ ] Click **Domains** → Add `thewitnessapp.com`
- [ ] Add the DNS records Resend shows you to your domain registrar
- [ ] Return to Resend and click **Verify** once DNS propagates (10 min)

**Your Resend API Key:** `re_dzqeQTve_JyZ1gX9JDZsmjkNjZ4DZY8by`

---

## STEP 3: Deploy to Vercel (10 min)

### Option A: GitHub + Vercel (Recommended)

1. Create GitHub repo:
   ```bash
   cd /path/to/witness-website
   git init
   git add .
   git commit -m "Initial commit: Witness website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/witness-website
   git push -u origin main
   ```

2. Go to https://vercel.com/signup (if you don't have account)
3. Click **Add New** → **Project**
4. Select your GitHub repository
5. Click **Import**

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## STEP 4: Add Environment Variables to Vercel (5 min)

1. In Vercel Dashboard, open your project
2. Go to **Settings** → **Environment Variables**
3. Add these:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://mdowgalvrqyhsekibzbe.supabase.co
   SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kb3dnYWx2cnF5aHNla2liemJlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjYxNDI4NSwiZXhwIjoyMDg4MTkwMjg1fQ.qqK2KRzQjGmC0asEvvYPLtjMU5aD8nENwWmMcBN8Yk0
   RESEND_API_KEY = re_dzqeQTve_JyZ1gX9JDZsmjkNjZ4DZY8by
   ADMIN_EMAIL_1 = noam@thewitnessapp.com
   ADMIN_EMAIL_2 = contact@thewitnessapp.com
   NEXT_PUBLIC_SITE_URL = https://thewitnessapp.com
   ```
4. Click **Save**

---

## STEP 5: Test on Staging URL (5 min)

1. Vercel gives you a staging URL (e.g., `https://witness-website-xyz.vercel.app`)
2. Visit the URL
3. Test the form workflow:
   - Click "Get Access"
   - Fill form with test data
   - Submit
   - Check your email for confirmation
   - Check Supabase: `SELECT * FROM submissions;`

---

## STEP 6: Point Domain to Vercel (15 min)

1. In Vercel Dashboard:
   - Go to **Settings** → **Domains**
   - Add `thewitnessapp.com`

2. Vercel shows you nameserver instructions. Pick your registrar:
   - **GoDaddy:** https://support.godaddy.com/en/article/25133-managing-nameservers
   - **Namecheap:** https://www.namecheap.com/support/knowledgebase/article.aspx/9270/46/how-do-i-set-the-nameservers-for-my-domain
   - **Google Domains:** https://support.google.com/domains/answer/3290309
   - **Bluehost:** https://www.bluehost.com/help/article/changing-nameservers

3. Update nameservers in your registrar

4. **Wait 15-30 minutes** for DNS to propagate

5. Test: Visit https://thewitnessapp.com

---

## STEP 7: Verify Live Site (10 min)

- [ ] Homepage loads at thewitnessapp.com
- [ ] Navigation works
- [ ] Forms load properly
- [ ] Submit test form
- [ ] Check email for confirmation
- [ ] Check Supabase for submission
- [ ] Verify admin emails received notification

---

## What's Live

### Public Features
- Home page with full Witness product story
- 4 form types:
  - General waitlist
  - Newsroom/media inquiry
  - Partner/contact inquiry
  - General contact
- Beautiful design matching your HTML mockup
- Full SEO optimization

### Backend
- Form submissions → Supabase
- Confirmation emails → Resend
- Admin alerts → noam@thewitnessapp.com + contact@thewitnessapp.com
- Contact deduplication (same email = updated, not duplicate)

---

## Monitoring

### Daily
- Check Supabase submissions: https://supabase.com/dashboard/project/mdowgalvrqyhsekibzbe/editor
- Check Resend logs: https://dashboard.resend.com/logs

### Weekly
- Review new contacts
- Respond to inquiries

---

## Future Enhancements

After launch, you can add:
1. More form types (contributors, investors)
2. Admin dashboard to manage submissions
3. Blog/news section
4. Interactive demo/preview of the app
5. Email marketing campaigns via Resend
6. Analytics (Vercel built-in)

---

## Troubleshooting

### Forms not working
1. Check Vercel environment variables are saved
2. Check browser console for errors (F12)
3. Check Vercel function logs (Settings → Function Logs)

### Emails not sending
1. Verify Resend API key in Vercel
2. Verify domain is verified in Resend
3. Check Resend email logs

### Domain not pointing
1. DNS changes take 15-30 minutes
2. Check with: https://dns.google/
3. Verify nameservers are correct in registrar

---

## Timeline

- **Supabase Setup:** 5 min
- **Resend Verification:** 10 min (includes DNS wait)
- **Vercel Deploy:** 10 min
- **Domain Pointing:** 15-30 min
- **Total:** ~45 min to fully live

---

## Support Links

- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Supabase: https://supabase.com/docs
- Resend: https://resend.com/docs

---

## You're All Set! 🎉

Your Witness website is built, tested, and ready to launch. Following this checklist will have you live in less than an hour.

Questions? Check the README.md for more detail.
