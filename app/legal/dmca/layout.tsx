import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'DMCA & Copyright Policy | Witness',
  description:
    'How to submit a DMCA copyright takedown notice to Witness, our counter-notice procedure, restoration timeline, repeat infringer policy, and public interest considerations for news footage.',
  path: '/legal/dmca',
  keywords: ['Witness DMCA', 'Witness copyright policy', 'Witness takedown notice'],
})

export default function DmcaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
