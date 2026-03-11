import type { Metadata } from 'next'
import HomePage from './home'

export const metadata: Metadata = {
  title: 'Witness — Live Map of Global Events',
  description:
    'A real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. Unfiltered. Uncentralized. Unignorable.',
  keywords:
    'citizen journalism, real-time news, map, eyewitness reports, verification, transparency',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Witness',
    description: 'History is happening now. The world deserves witnesses.',
    type: 'website',
    url: 'https://thewitnessapp.com',
  },
  robots: 'index, follow',
}

export default function Page() {
  return <HomePage />
}
