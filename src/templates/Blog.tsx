import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Preview from "../components/Preview"
import SEO from "../components/SEO"
import { BlogQuery } from "../graphqlTypes"

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  font-size: 4rem;
  color: var(--color-black);
  user-select: none;
`

const TagLink = styled(Link)`
  font-size: 1.5rem;
  color: var(--color-weak);
  user-select: none;
`

interface Props {
  pageContext: {
    title: string,
    posts: BlogQuery['allMarkdownRemark']['nodes'],
    basicPath: string,
    pageIndex: number,
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
        <HeaderContainer>
          <Title>{title}</Title>
          <TagLink to='/tags'>View all tags</TagLink>
        </HeaderContainer>
        {posts.map(post => (<Preview key={post.fields.slug} post={post}/>))}
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {pageIndex > 1 && (
                <Link to={`/${basicPath}/${pageIndex - 1}`} rel="prev">
                  ← Previous page
                </Link>
              )}
            </li>
            <li>
              {pageIndex < pageCount && (
                <Link to={`/${basicPath}/${pageIndex + 1}`} rel="next">
                  Next page →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </>
  )
}

export default BlogTemplate
