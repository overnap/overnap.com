import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { AboutQuery } from "../graphqlTypes"

const Title = styled.h1`
  font-size: 4rem;
  user-select: none;
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
        <Title>{data.markdownRemark!.frontmatter.title}</Title>
        <section
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
    markdownRemark(fields: { sourceInstanceName: { eq: "about" } }) {
      html
      frontmatter { title }
    }
  }
`
