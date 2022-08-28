/**
 * @Title Seo
 * @Description This component is used to add SEO to the page.
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This component doest not have any translation.
 */

// Types
import { SeoProps } from '../../types/Seo'

// Third party components
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