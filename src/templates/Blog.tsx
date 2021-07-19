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
  max-width: 600px;
  font-size: 3.75rem;
  user-select: none;

  @media screen and (max-width: 900px) {
    max-width: 300px;
  }
`

const TagLink = styled(Link)`
  font-size: 1.4rem;
  user-select: none;
`

// TODO: Optimize for pagenation
const BlogNav = styled.nav`
  margin: 1.5rem 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--color-black);
  }
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
        <BlogNav>
          {pageIndex > 1 ? (
            <Link to={`/${basicPath}/${pageIndex - 1}`} rel="prev">
              ← Previous page
            </Link>
          ) : (
            <div />
          )}
          {pageIndex < pageCount ? (
            <Link to={`/${basicPath}/${pageIndex + 1}`} rel="next">
              Next page →
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
