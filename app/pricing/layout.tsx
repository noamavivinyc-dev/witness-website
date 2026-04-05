import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Witness Business Model | Newsroom Licensing and Creator Revenue',
  description:
    'Understand how Witness makes money through newsroom licensing, creator subscriptions, and data products while keeping incentives aligned with accurate reporting.',
  path: '/pricing',
  keywords: ['newsroom licensing', 'creator revenue share', 'business model'],
})

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
