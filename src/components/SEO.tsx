import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import { SeoQuery } from '../graphqlTypes'

type Metadata = ({ name: string } | { property: string }) & { content: string }

interface Props {
  description?: string
  lang?: string
  meta?: []
  title: string
}

const SEO = ({ description, lang = 'ko', meta = [], title }: Props) => {
  const data = useStaticQuery<SeoQuery>(graphql`
    query seo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaDescription =
    description || data.site?.siteMetadata?.description || ''
  // const defaultTitle = data.site?.siteMetadata?.title || undefined
  const defaultMeta: Array<Metadata> = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ]

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      // temporary remove; the name is too long!
      // titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : undefined}
      meta={defaultMeta.concat(meta)}
    >
      <link
        rel="preload"
        as="font"
        href="/fonts/Pretendard-Bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/fonts/Pretendard-Regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/font.css" type="text/css" />
    </Helmet>
  )
}

export default SEO
