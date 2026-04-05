import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Live Breaking News Map & Verification Platform | Witness',
  description:
    'See how the Witness platform combines a live global news map, eyewitness reporting, trust scores, and public discussion to verify breaking events in real time.',
  path: '/platform',
  keywords: ['live breaking news map', 'report verification platform', 'real-time event map'],
})

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
