import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Preview from "../components/Preview"
import SEO from "../components/SEO"
import Title from "../components/Title"
import { HomeQuery } from "../graphqlTypes"

const Divider = styled.h1`
  font-size: 2.5rem;
  user-select: none;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TagLink = styled(Link)`
  font-size: 1.4rem;
  user-select: none;
`

const Section = styled.section`
  margin: 2em 0;
  font-size: 17px;
`

interface Props {
  data: HomeQuery
}

const Home = ({ data }: Props) => {
  if (!data.main || !data.project || !data.allMarkdownRemark?.nodes) {
    return <div>Error!</div>
  }

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Title>{data.main!.frontmatter!.title!}</Title>
        <Section
          dangerouslySetInnerHTML={{ __html: data.main!.html! }}
          itemProp="articleBody"
        />
        <HeaderContainer>
          <Divider>Blog</Divider>
          <TagLink to="/blog/1">View more</TagLink>
        </HeaderContainer>
        {data.allMarkdownRemark.nodes.map(post => (
          <Preview key={post.fields.slug} post={post} />
        ))}
        <Divider>Projects</Divider>
        <Section
          dangerouslySetInnerHTML={{ __html: data.project!.html! }}
          itemProp="articleBody"
        />
      </Layout>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query home {
    main: markdownRemark(
      fields: {
        sourceInstanceName: { eq: "essential" }
        slug: { eq: "/main/" }
      }
    ) {
      html
      frontmatter {
        title
      }
    }
    project: markdownRemark(
      fields: {
        sourceInstanceName: { eq: "essential" }
        slug: { eq: "/project/" }
      }
    ) {
      html
    }
    allMarkdownRemark(
      limit: 3
      filter: {
        fields: { sourceInstanceName: { eq: "blog" } }
        frontmatter: { published: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
  }
`
