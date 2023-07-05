import { GatsbyNode } from 'gatsby'

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  async ({ actions: { createTypes } }) => {
    createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter!
      fields: Fields!
    }

    type Frontmatter {
      title: String!
      description: String
      date: Date! @dateformat
      tags: [String!]!
      published: Boolean!
    }

    type Fields {
      slug: String!
      sourceInstanceName: String!
    }
  `)
  }

export default createSchemaCustomization
