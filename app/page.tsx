import type { Metadata, Viewport } from 'next'
import HomePage from './home'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Witness — Real-Time Citizen Journalism Platform',
  description:
    'A real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. Unfiltered. Uncentralized. Unignorable.',
  keywords:
    'citizen journalism, real-time news, live map, eyewitness reports, breaking news, verification, transparency, global events',
  openGraph: {
    title: 'Witness — Real-Time Citizen Journalism Platform',
    description: 'History is happening now. A live map of global events reported by citizens on the ground. The world deserves witnesses.',
    type: 'website',
    url: 'https://thewitnessapp.com',
    siteName: 'Witness',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witness — Real-Time Citizen Journalism Platform',
    description: 'History is happening now. A live map of global events reported by citizens on the ground.',
  },
  alternates: { canonical: 'https://thewitnessapp.com' },
  robots: 'index, follow',
}

export default function Page() {
  return <HomePage />
}
