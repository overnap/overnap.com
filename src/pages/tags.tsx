import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import React, { useLayoutEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { TagsQuery } from "../graphqlTypes"

const Title = styled.h1`
  font-size: 4rem;
  user-select: none;
`

interface Props {
  data: TagsQuery
}

const Tags = ({ data }: Props) => {
  return (
    <>
      <SEO title='Tags' />
      <Layout>
        <Title>Tags</Title>
        {data.allMarkdownRemark.group.map(tag => (
          <div key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </div>
        ))}
      </Layout>
    </>
  )
}

export default Tags

export const pageQuery = graphql`
  query tags {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
