import { graphql, useStaticQuery } from 'gatsby'
import { SeoQuery } from '../graphqlTypes'
import { WebSite, WithContext, BlogPosting } from 'schema-dts'
import React from 'react'

interface Props {
  description?: string
  lang?: string
  title: string
  schema?: WithContext<BlogPosting> | WithContext<WebSite>
}

const SEO = ({ description, lang = 'ko', title, schema }: Props) => {
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

  return (
    <>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
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
    </>
  )
}

export default SEO
