import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Verified Eyewitness Content for Newsrooms | Witness',
  description:
    'License verified eyewitness photos, video, and geotagged reports from the Witness platform for breaking news coverage, investigations, and field reporting.',
  path: '/for-newsrooms',
  keywords: ['eyewitness content for newsrooms', 'newsroom licensing', 'verified eyewitness footage'],
})

export default function ForNewsroomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
