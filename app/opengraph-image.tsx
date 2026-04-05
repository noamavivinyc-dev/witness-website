import { ImageResponse } from 'next/og'
import { WitnessSocialImage } from '@/lib/social-image'
import { socialImageConfig } from '@/lib/seo'

export const alt = socialImageConfig.alt
export const size = {
  width: socialImageConfig.width,
  height: socialImageConfig.height,
}
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(<WitnessSocialImage />, {
    ...size,
  })
}
