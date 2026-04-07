import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Content Policy | Witness',
  description:
    'What is permitted and prohibited on Witness, including absolute prohibitions, data use restrictions, moderation standards, and how to appeal content decisions.',
  path: '/legal/content-policy',
  keywords: ['Witness content policy', 'Witness community standards', 'Witness moderation'],
})

export default function ContentPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
