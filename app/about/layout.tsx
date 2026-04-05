import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'About Witness | Mission for Real-Time Citizen Journalism',
  description:
    'Learn how Witness turns eyewitness reports into a transparent public record with geotagged reporting, community verification, and a live global news map.',
  path: '/about',
  keywords: ['about Witness', 'citizen journalism mission', 'live public record'],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
