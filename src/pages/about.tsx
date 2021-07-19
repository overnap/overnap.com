import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { AboutQuery } from "../graphqlTypes"

const Title = styled.h1`
  font-size: 3.75rem;
  user-select: none;
`

const Section = styled.section`
  margin: 2em 0;
  font-size: 16px;
`

interface Props {
  data: AboutQuery
}

const About = ({ data }: Props) => {
  if (!data.markdownRemark) {
    return (<div>Error!</div>)
  }

  return (
    <>
      <SEO title='About' />
      <Layout>
        <Title>{data.markdownRemark!.frontmatter!.title!}</Title>
        <Section
            dangerouslySetInnerHTML={{ __html: data.markdownRemark!.html! }}
            itemProp="articleBody"
          />
      </Layout>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query about {
    markdownRemark(
      fields: {
        sourceInstanceName: { eq: "essential" }
        slug: { eq: "/about/" }
      }
    ) {
      html
      frontmatter { title }
    }
  }
`
