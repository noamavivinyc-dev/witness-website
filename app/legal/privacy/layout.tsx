import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | Witness',
  description:
    'Learn what data Witness collects, how it is used, how we protect contributor safety, and your rights under CCPA and GDPR.',
  path: '/legal/privacy',
  keywords: ['Witness privacy policy', 'Witness data collection', 'Witness GDPR', 'Witness CCPA'],
})

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
