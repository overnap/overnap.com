import React from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import { PostTemplateQuery } from "../graphqlTypes"
import SEO from "../components/SEO"

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
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
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