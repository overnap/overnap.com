import { GatsbyNode } from 'gatsby';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = async ({
  actions: { createTypes }
}) => {
  // TODO: Cleanup
  createTypes(`
    type SiteSiteMetadata {
      title: String!,
      author: String!,
      github: String!,
      email: String!,
      description: String!,
      siteUrl: String!,
    }

    type SitePageContext {
      postsPerPage: Int!
      isLastPage: Boolean
    }

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
    }

    type Tag implements Node {
      name: String!
    }
  `)
}

export default createSchemaCustomization
