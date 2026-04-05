import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Report Breaking News as a Witness Contributor | Witness',
  description:
    'Submit geotagged eyewitness reports, build a public trust score, and earn revenue when newsrooms license your reporting through Witness.',
  path: '/for-contributors',
  keywords: ['citizen journalist platform', 'eyewitness contributor', 'OSINT contributor platform'],
})

export default function ForContributorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
