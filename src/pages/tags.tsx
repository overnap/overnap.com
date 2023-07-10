import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Tag from '../components/Tag'
import { TagsQuery } from '../graphqlTypes'

const Line = styled.div`
  margin: 0.15em auto;
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  user-select: none;

  a {
    font-size: 4rem;
    font-weight: 700;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
  }

  @media screen and (max-width: 900px) {
    a {
      font-size: 2.5rem;
      text-align: right;
    }

    span {
      font-size: 1.75rem;
    }

    flex-direction: row-reverse;
  }
`
interface Props {
  data: TagsQuery
}

const Tags = ({ data }: Props) => {
  const groups = data.allMarkdownRemark.group

  if (!groups) {
    return <div>Error!</div>
  }

  groups.sort((a, b) => {
    return b.totalCount - a.totalCount
  })

  return (
    <>
      <SEO title="Tags" />
      <Layout>
        {groups.map(tag => (
          <Line>
            <Tag tag={tag.fieldValue!} />
            <span> - </span>
            <span>{tag.totalCount} posts</span>
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
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`
