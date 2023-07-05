import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Preview from '../components/Preview'
import SEO from '../components/SEO'
import { BlogQuery } from '../graphqlTypes'

// TODO: Optimize for pagenation
const BlogNav = styled.nav`
  margin: 1.5rem 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
  }
`

interface Props {
  pageContext: {
    title: string
    posts: BlogQuery['allMarkdownRemark']['nodes']
    basicPath: string
    pageIndex: number
    pageCount: number
  }
}

const BlogTemplate = ({ pageContext }: Props) => {
  const { title, posts, basicPath, pageIndex, pageCount } = pageContext

  if (!title || !posts || !pageIndex || !pageCount || !basicPath) {
    return <div>Error!</div>
  }

  return (
    <>
      <SEO title={title} />
      <Layout>
        {posts.map(post => (
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        ))}
        <BlogNav>
          {pageIndex > 1 ? (
            <Link to={`/${basicPath}/${pageIndex - 1}`} rel="prev">
              ← PREV
            </Link>
          ) : (
            <div />
          )}
          {pageIndex < pageCount ? (
            <Link to={`/${basicPath}/${pageIndex + 1}`} rel="next">
              NEXT →
            </Link>
          ) : (
            <div />
          )}
        </BlogNav>
      </Layout>
    </>
  )
}

export default BlogTemplate
