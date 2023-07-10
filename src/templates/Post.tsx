import React, { useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { PostTemplateQuery } from '../graphqlTypes'
import SEO from '../components/SEO'
import styled from '@emotion/styled'
import Tag from '../components/Tag'
import TOC from '../components/TOC'
import Utterances from '../components/Utterances'
import 'katex/dist/katex.min.css'

const Title = styled.h1`
  font-size: 3.25rem;
  margin: 5rem 0 0;
`

const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  display: block;
`

const FrontMatter = styled.div`
  * {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

const TagDetails = styled.details`
  font-size: 1.75rem;
  font-weight: 700;
  user-select: none;
  text-align: right;

  a {
    display: block;
  }
`

const TOCAnchor = styled.div`
  margin: 3rem 0 0;
  display: block;

  @media screen and (min-width: 1400px) {
    margin: 0;
    display: block;
    position: fixed;
    top: 15rem;
    left: calc(50vw - 700px);
    max-width: 280px;
  }
`

const Section = styled.section`
  margin: 4rem 0;
  font-size: 17px;

  img {
    border-radius: 0.8em;
  }

  h2,
  h3 {
    margin: 3rem 0 1.25rem 0;
  }
`

const Article = styled.article`
  max-width: 680px;
  margin: auto;
`

interface Props {
  data: PostTemplateQuery
}

const PostTemplate = ({ data }: Props) => {
  const post = data.markdownRemark!
  const [currentHeader, setCurrentHeader] = useState('')

  if (!post) {
    return <div>ERROR!</div>
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const headerElems =
        document.querySelectorAll<HTMLAnchorElement>('a.anchor')
      if (headerElems.length === 0) {
        return
      }

      window.onscroll = () => {
        let memoizedHeader = ''
        const offset = 120

        // To highlight the header in TOC
        if (
          headerElems[headerElems.length - 1].getBoundingClientRect().bottom <
          offset
        ) {
          memoizedHeader = headerElems[headerElems.length - 1].href
        } else {
          for (const elem of headerElems) {
            if (offset < elem.getBoundingClientRect().bottom) {
              break
            } else {
              memoizedHeader = elem.href
            }
          }
        }

        setCurrentHeader(memoizedHeader.split('/').pop() || '')
      }

      return () => {
        window.onscroll = null
      }
    }
  }, [])

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || undefined}
      />
      <Layout>
        <Article itemScope itemType="http://schema.org/Article">
          <header>
            <Title itemProp="headline">{post.frontmatter.title}</Title>
            {post.frontmatter.description && (
              <Description>{post.frontmatter.description}</Description>
            )}
            <FrontMatter>
              <span>— </span>
              <time>{post.frontmatter.date}</time>
            </FrontMatter>
            <TagDetails>
              <summary>TAGS</summary>
              {post.frontmatter.tags.map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
            </TagDetails>
          </header>
          <TOCAnchor>
            <TOC
              html={data.markdownRemark!.tableOfContents!}
              currentHeader={currentHeader}
            />
          </TOCAnchor>
          <Section
            dangerouslySetInnerHTML={{ __html: post.html! }}
            itemProp="articleBody"
          />
        </Article>
        <Utterances theme={'github-light'} />
      </Layout>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query postTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        tags
      }
    }
  }
`
