import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Witness',
  description: 'Witness is a real-time, map-based citizen journalism platform. Learn about our mission to create an unfiltered, uncentralized public record of global events.',
  openGraph: {
    title: 'About | Witness',
    description: 'Learn about Witness — a real-time citizen journalism platform creating an unfiltered public record of global events.',
    url: 'https://thewitnessapp.com/about',
    siteName: 'Witness',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Witness',
    description: 'Learn about Witness — a real-time citizen journalism platform creating an unfiltered public record of global events.',
  },
  alternates: { canonical: 'https://thewitnessapp.com/about' },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
