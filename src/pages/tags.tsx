import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import React, { useLayoutEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Tag from "../components/Tag"
import { TagsQuery } from "../graphqlTypes"

const Title = styled.h1`
  font-size: 4rem;
  user-select: none;
`

const Line = styled.div`
  margin: 11px 0px;
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
          <Line>
            <Tag tag={tag.fieldValue!} />
            - {tag.totalCount} posts
          </Line>
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
