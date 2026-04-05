import type { Metadata, Viewport } from 'next'
import './styles.css'
import { absoluteUrl, defaultRobots, siteConfig, socialImageConfig } from '@/lib/seo'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
    template: '%s',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  category: 'news',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'Witness',
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
    title: 'Witness App | Real-Time News Map & Citizen Journalism Platform',
    description: siteConfig.description,
    images: [absoluteUrl(socialImageConfig.twitterPath)],
  },
  robots: defaultRobots,
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@id': `${siteConfig.url}#organization`,
    '@type': 'Organization',
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    description: siteConfig.description,
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'customer support',
    },
    publishingPrinciples: `${siteConfig.url}/trust-and-safety`,
    knowsAbout: [
      'Citizen journalism',
      'Eyewitness reporting',
      'Live news mapping',
      'Community verification',
      'Newsroom licensing',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@id': `${siteConfig.url}#website`,
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.alternateName,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%23E8440A'>W</text></svg>" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Sora:wght@700;800&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
