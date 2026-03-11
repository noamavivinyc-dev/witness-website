import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Newsrooms | Witness',
  description: 'Access verified eyewitness content for your newsroom. License real-time citizen reports, geotagged footage, and on-the-ground journalism through Witness.',
  openGraph: {
    title: 'For Newsrooms | Witness',
    description: 'Access verified eyewitness content and license real-time citizen reports through the Witness platform.',
    url: 'https://thewitnessapp.com/for-newsrooms',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Newsrooms | Witness',
    description: 'Access verified eyewitness content and license real-time citizen reports through the Witness platform.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/for-newsrooms' },
}

export default function ForNewsroomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
