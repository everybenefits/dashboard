/**
 * @Title Seo
 * @Description This component is used to add SEO to the page.
 * @Author Diesan Romero
 * @Date 08-28-2022
 * @Note This component doest not have any translation.
 */

// Types
import type { SeoProps } from './types'

// Third party components
import { NextSeo } from 'next-seo'

export default function Seo({ title, description, url }: SeoProps) {
  return (
    <NextSeo
      title={`${title} - Every Benefits`}
      description={`${description}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: `${process.env.NEXT_PUBLIC_SITE_URL} ${url}`,
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