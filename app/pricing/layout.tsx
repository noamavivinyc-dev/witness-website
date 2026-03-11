import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Model | Witness',
  description: 'Witness generates revenue through content licensing, creator subscriptions, institutional data access, and premium features — not ads or engagement algorithms.',
  openGraph: {
    title: 'Business Model | Witness',
    description: 'How Witness sustains itself: content licensing, creator subscriptions, and institutional data access — never ads.',
    url: 'https://thewitnessapp.com/pricing',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Model | Witness',
    description: 'How Witness sustains itself: content licensing, creator subscriptions, and institutional data access — never ads.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/pricing' },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
