import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'How Witness Verifies Eyewitness Reports | Trust & Safety',
  description:
    'Learn how Witness verifies eyewitness reports using corroboration, trust tiers, community flags, and transparent moderation instead of opaque ranking algorithms.',
  path: '/trust-and-safety',
  keywords: ['eyewitness verification', 'trust and safety', 'community moderation'],
})

export default function TrustAndSafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
