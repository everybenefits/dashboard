// Types
import type { SeoProps } from '../../types/Seo'

// Third party components
import { NextSeo } from 'next-seo'

const Seo = ({ title, description, url }: SeoProps): JSX.Element => {
  return (
    <NextSeo
      title={`${title}`}
      description={`${description}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: `${process.env.NEXT_PUBLIC_SITE_URL} ${url}`,
        site_name: title,
      }}
      twitter={{
        handle: '@diesanromero',
        site: '@everybenefits',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default Seo
