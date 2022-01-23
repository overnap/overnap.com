import { GatsbyNode } from "gatsby"
import path from "path"
import { BlogQuery, PostQuery, TagQuery } from "../graphqlTypes"

interface queryResult<T> {
  data?: T
  errors?: any
}

const assertQueryResult = (result: queryResult<any>) =>
  result.errors === undefined

const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage },
  reporter,
}) => {
  const perPage = 5 // TODO: Change to modify in env or config
  const Post = path.resolve("./src/templates/Post.tsx")
  const Blog = path.resolve("./src/templates/Blog.tsx")

  // Create Post pages

  const resultForPost: queryResult<PostQuery> = await graphql(`
    query post {
      allMarkdownRemark(
        filter: {
          fields: { sourceInstanceName: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (!assertQueryResult(resultForPost)) {
    reporter.panicOnBuild(
      "Error in loading markdown for post generation",
      resultForPost.errors
    )
    return
  }

  const posts = resultForPost.data?.allMarkdownRemark.nodes

  if (posts === undefined) {
    reporter.panicOnBuild("Null check error in post generation")
    return
  }

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const prevPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: Post,
        context: {
          id: post.id,
          prevPostId,
          nextPostId,
        },
      })
    })
  }

  // Create Blog pages

  const resultForBlog: queryResult<BlogQuery> = await graphql(`
    query blog {
      allMarkdownRemark(
        filter: {
          fields: { sourceInstanceName: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          timeToRead
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  `)

  if (!assertQueryResult(resultForBlog)) {
    reporter.panicOnBuild(
      "There was an error in markdown loading for page generation",
      resultForBlog.errors
    )
    return
  }

  const heads = resultForBlog.data?.allMarkdownRemark.nodes

  if (heads === undefined) {
    reporter.panicOnBuild("Null check error in page generation")
    return
  }

  if (heads.length > 0) {
    for (let i = 0; i * perPage < heads.length; i += 1) {
      createPage({
        path: `blog/${i + 1}`,
        component: Blog,
        context: {
          title: "Blog",
          posts: heads.slice(i * perPage, (i + 1) * perPage),
          basicPath: "blog",
          pageIndex: i + 1,
          pageCount: Math.ceil(heads.length / perPage),
        },
      })
    }
  }

  // Create Tag pages

  const resultForTag: queryResult<TagQuery> = await graphql(`
    query tag {
      allMarkdownRemark(
        filter: {
          fields: { sourceInstanceName: { eq: "blog" } }
          frontmatter: { published: { eq: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        group(field: frontmatter___tags) {
          edges {
            node {
              timeToRead
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tags
              }
            }
          }
          fieldValue
          totalCount
        }
      }
    }
  `)

  if (!assertQueryResult(resultForTag)) {
    reporter.panicOnBuild(
      "There was an error in markdown loading for tag page generation",
      resultForTag.errors
    )
    return
  }

  const tagGroups = resultForTag.data?.allMarkdownRemark.group

  if (tagGroups === undefined) {
    reporter.panicOnBuild("Null check error in tag page generation")
    return
  }

  if (tagGroups.length > 0) {
    tagGroups.map(group => {
      for (let i = 0; i * perPage < group.edges.length; i += 1) {
        createPage({
          path: `tag/${group.fieldValue!.replace(" ", "-")}/${i + 1}`,
          component: Blog,
          context: {
            title:
              group.fieldValue!.charAt(0).toUpperCase() +
              group.fieldValue!.slice(1),
            posts: group.edges
              .slice(i * perPage, (i + 1) * perPage)
              .map(edge => edge.node),
            basicPath: `tag/${group.fieldValue!.replace(" ", "-")}`,
            pageIndex: i + 1,
            pageCount: Math.ceil(group.edges.length / perPage),
          },
        })
      }
    })
  }
}

export default createPages
