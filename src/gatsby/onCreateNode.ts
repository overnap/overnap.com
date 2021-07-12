import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem"

const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions: { createNodeField },
  getNode
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const pathName = createFilePath({ node, getNode, basePath: 'blog' })

    // Create slug by folder name

    createNodeField({
      node,
      name: 'slug',
      value: pathName
    })
  }
}

export default onCreateNode
