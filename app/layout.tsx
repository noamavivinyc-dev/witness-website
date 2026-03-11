import type { Metadata, Viewport } from 'next'
import './styles.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Witness — Real-Time Citizen Journalism Platform',
    template: '%s',
  },
  description:
    'A real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. Unfiltered. Uncentralized. Unignorable.',
  metadataBase: new URL('https://thewitnessapp.com'),
  openGraph: {
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: 'index, follow',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Witness',
  url: 'https://thewitnessapp.com',
  description:
    'A real-time, map-based citizen journalism platform. Unfiltered. Uncentralized. Unignorable.',
  foundingDate: '2025',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@thewitnessapp.com',
    contactType: 'customer support',
  },
}

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
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap"
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
