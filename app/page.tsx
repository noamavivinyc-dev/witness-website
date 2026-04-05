import type { Metadata, Viewport } from 'next'
import HomePage from './home'
import { createPageMetadata, homeFaqs, siteConfig } from '@/lib/seo'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
    description:
      'Witness App is a real-time world events map and citizen journalism platform for live eyewitness reporting, transparent trust signals, and newsroom-grade context.',
    path: '/',
    keywords: [
      'Witness app',
      'Witness map',
      'Witness news',
      'real-time news map',
      'real-time world events map',
      'live world events map',
      'citizen journalism platform',
      'eyewitness reporting platform',
    ],
  }),
}

const homepageJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteConfig.url}#homepage`,
    url: siteConfig.url,
    name: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
    description:
      'Witness App is a real-time world events map and citizen journalism platform for live eyewitness reporting, transparent trust signals, and newsroom-grade context.',
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
    about: [
      'Real-time world events map',
      'Citizen journalism platform',
      'Live world events map',
      'Eyewitness reporting platform',
      'Transparent trust signals',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <HomePage />
    </>
  )
}
