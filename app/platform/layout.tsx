import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Platform | Witness',
  description: 'Explore the four layers of Witness: a live global map, citizen reporting, real-time feed, and structured public discourse for transparent citizen journalism.',
  openGraph: {
    title: 'The Platform | Witness',
    description: 'Explore the four layers of Witness: live map, citizen reporting, real-time feed, and public discourse.',
    url: 'https://thewitnessapp.com/platform',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Platform | Witness',
    description: 'Explore the four layers of Witness: live map, citizen reporting, real-time feed, and public discourse.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/platform' },
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
