// Types
import { SeoProps } from '../../types/Seo'

import { NextSeo } from 'next-seo'

export function Seo(data: SeoProps) {
  return (
    <NextSeo
      title={data.title}
      description={data.description}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: `${process.env.NEXT_PUBLIC_SITE_URL} ${data.url}`,
        site_name: "Every Benefits",
      }}
      twitter={{
        handle: '@diesanromero',
        site: '@everybenefits',
        cardType: 'summary_large_image',
      }}
    />
  )
}