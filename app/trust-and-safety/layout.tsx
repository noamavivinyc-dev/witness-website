import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trust & Safety | Witness',
  description: 'How Witness verifies reports and protects users. Learn about trust scores, community corroboration, content moderation, and our commitment to information integrity.',
  openGraph: {
    title: 'Trust & Safety | Witness',
    description: 'How Witness verifies reports through trust scores, community corroboration, and transparent content moderation.',
    url: 'https://thewitnessapp.com/trust-and-safety',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust & Safety | Witness',
    description: 'How Witness verifies reports through trust scores, community corroboration, and transparent content moderation.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/trust-and-safety' },
}

export default function TrustAndSafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
