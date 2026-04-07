import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service | Witness',
  description:
    'The Witness Terms of Service govern account registration, content ownership, prohibited conduct, marketplace licensing, reporter safety, and dispute resolution.',
  path: '/legal/terms',
  keywords: ['Witness terms of service', 'Witness user agreement', 'Witness platform rules'],
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
