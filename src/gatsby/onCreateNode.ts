import crypto from 'crypto'
import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import { v4 } from 'uuid'

const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  actions: { createNode, createNodeField },
  getNode,
  getNodesByType
}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const pathName = createFilePath({ node, getNode, basePath: 'blog' })

    // Create slug by folder name

    createNodeField({
      node,
      name: 'slug',
      value: pathName
    })

    // Create tag node for new one

    const tagNodes = getNodesByType('Tag');
    (node.frontmatter as any).tags.forEach((tag: string) => {
      const isExists = tagNodes.find(n => n.name == tag)
      if (!isExists) {
        createNode({
          name: tag,
          id: v4(),
          parent: getNodesByType('Site')[0].id, // Add a parent to avoid GC
          internal: {
            type: 'Tag',
            contentDigest: crypto.createHash('md5').update(tag).digest('hex')
          }
        })
      }
    })
  }
}

export default onCreateNode
