import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { PostTemplateQuery } from "../graphqlTypes"
import SEO from "../components/SEO"
import styled from '@emotion/styled'
import Tag from '../components/Tag'

const Title = styled.h1`
  font-size: 3.25rem;
  color: var(--color-black);
  margin: 3.75rem 0 1.25rem;
`

const Description = styled.span`
  font-size: 1rem;
  color: var(--color-black);
  display: block;
`

const Time = styled.div`
  font-size: 1rem;
  color: var(--color-gray);
  margin: 0.5rem 0 1.25rem;
`

const Section = styled.section`
  margin: 4.25rem 0rem 1rem;
`

interface Props {
  data: PostTemplateQuery
}

const PostTemplate = ({ data }: Props) => {
  const post = data.markdownRemark!
  const { previous, next } = data

  if (!post) {
    return <div>ERROR!</div>
  }

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || undefined}
      />
      <Layout>
        <article itemScope itemType="http://schema.org/Article">
          <header>
            <Title itemProp="headline">{post.frontmatter.title}</Title>
            <Description>{post.frontmatter.description}</Description>
            <Time>{post.frontmatter.date} - {post.timeToRead} min</Time>
            {post.frontmatter.tags.map(tag => (<Tag key={tag} tag={tag} />))}
          </header>
          <Section
            dangerouslySetInnerHTML={{ __html: post.html! }}
            itemProp="articleBody"
          />
          <hr />
        </article>
        <nav className="blog-post-nav">
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
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    </>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query postTemplate (
    $id: String!
    $prevPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    previous: markdownRemark(id: { eq: $prevPostId }) {
      fields { slug }
      frontmatter { title }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields { slug }
      frontmatter { title }
    }
  }
`