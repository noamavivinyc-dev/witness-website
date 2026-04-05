import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Witness',
  alternateName: 'Witness App',
  url: 'https://www.thewitnessapp.com',
  email: 'contact@thewitnessapp.com',
  description:
    'Witness App is a real-time world events map and citizen journalism platform for live eyewitness reporting, transparent trust signals, and newsroom-grade context.',
  keywords: [
    'Witness app',
    'Witness map',
    'Witness news',
    'real-time news map',
    'real-time world events map',
    'live world events map',
    'citizen journalism platform',
    'eyewitness reporting platform',
    'live breaking news map',
    'real-time world events',
    'citizen reporting',
    'newsroom licensing',
    'community verification',
    'transparent trust signals',
  ],
} as const

export const socialImageConfig = {
  alt: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
  width: 1200,
  height: 630,
  openGraphPath: '/opengraph-image',
  twitterPath: '/twitter-image',
} as const

export const defaultRobots: NonNullable<Metadata['robots']> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export const homeFaqs = [
  {
    question: 'What is Witness App?',
    answer:
      'Witness App is a real-time world events map and citizen journalism platform where eyewitnesses, journalists, and analysts publish reports, events appear live on the map, and trust is surfaced through transparency and corroboration.',
  },
  {
    question: 'How does Witness verify reports?',
    answer:
      'Witness uses transparent trust signals instead of opaque ranking. Reports begin as unverified, gain corroboration from other people on the ground, can be flagged publicly, and move through visible trust tiers as evidence accumulates.',
  },
  {
    question: 'Who can contribute to Witness?',
    answer:
      'Anyone with relevant firsthand information can contribute to Witness, including eyewitnesses, journalists, local reporters, and OSINT analysts. Contributors build trust over time through accuracy, corroboration, and consistent reporting.',
  },
  {
    question: 'How can newsrooms use Witness?',
    answer:
      'Newsrooms can monitor live events, review corroboration and trust signals, and license verified eyewitness photos, video, and reports for breaking news coverage, investigations, and contextual reporting.',
  },
  {
    question: 'What makes Witness different from social media?',
    answer:
      'Witness is organized around location, time, and evidence rather than engagement algorithms. The platform combines a live map, geotagged reporting, public verification, and transparent moderation to create a more structured record of events.',
  },
] as const

export function absoluteUrl(path = '/') {
  if (!path || path === '/') {
    return siteConfig.url
  }

  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

type PageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords: [...new Set([...siteConfig.keywords, ...keywords])],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: absoluteUrl(socialImageConfig.openGraphPath),
          width: socialImageConfig.width,
          height: socialImageConfig.height,
          alt: socialImageConfig.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        absoluteUrl(socialImageConfig.twitterPath),
      ],
    },
  }
}
