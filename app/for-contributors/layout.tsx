import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Contributors | Witness',
  description: 'Report what you see and earn from your accuracy. Witness rewards citizen journalists, OSINT analysts, and eyewitnesses through transparent trust scores and revenue sharing.',
  openGraph: {
    title: 'For Contributors | Witness',
    description: 'Report what you see and earn from your accuracy. Join Witness as a citizen journalist or OSINT analyst.',
    url: 'https://thewitnessapp.com/for-contributors',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Contributors | Witness',
    description: 'Report what you see and earn from your accuracy. Join Witness as a citizen journalist or OSINT analyst.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/for-contributors' },
}

export default function ForContributorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
