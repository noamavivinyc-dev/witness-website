import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = {
  title: 'Witness — Live Map of Global Events',
  description:
    'A real-time, map-based citizen journalism platform. Anyone reports what they see. The world watches it unfold. Unfiltered. Uncentralized. Unignorable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A real-time, map-based citizen journalism platform. Unfiltered. Uncentralized. Unignorable." />
        <meta property="og:title" content="Witness" />
        <meta property="og:description" content="History is happening now. The world deserves witnesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thewitnessapp.com" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%23E8440A'>W</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  )
}
