import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Legal | Witness',
  description:
    'Terms of Service, Privacy Policy, Content Policy, and DMCA information for the Witness citizen journalism platform.',
  path: '/legal',
  keywords: ['Witness terms of service', 'Witness privacy policy', 'Witness legal'],
})

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
