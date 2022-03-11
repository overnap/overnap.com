import { GatsbyNode } from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"

const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions: { createNodeField },
  getNode,
}) => {
  if (node.internal.type === "MarkdownRemark") {
    // Create sourceInstanceName
    const source = getNode(node.parent!)!.sourceInstanceName as string

    createNodeField({
      node,
      name: "sourceInstanceName",
      value: source,
    })

    const pathName = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value: pathName,
    })
  }
}

export default onCreateNode
