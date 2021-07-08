import { GatsbyNode } from "gatsby"
import path from 'path'
import { BlogQuery, PostQuery } from "../graphqlTypes"

interface queryResult<T> {
  data?: T
  errors?: any
}

const assertQueryResult = (result: queryResult<any>) => result.errors === undefined

const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
  reporter
}) => {
  const perPage = 6 // TODO: Change to modify in env or config
  const Post = path.resolve('./src/templates/Post.tsx')
  const Blog = path.resolve('./src/templates/Blog.tsx')

  // create Post pages

  const resultForPost: queryResult<PostQuery> = await graphql(`
    query post {
      allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          id
          fields { slug }
        }
      }
    }
  `)

  if (!assertQueryResult(resultForPost)) {
    reporter.panicOnBuild(
      'Error in loading markdown for post generation',
      resultForPost.errors
    )
    return
  }

  const posts = resultForPost.data?.allMarkdownRemark.nodes

  if (posts === undefined) {
    reporter.panicOnBuild('Null check error in post generation')
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
          nextPostId
        }
      })
    })
  }

  // create Blog pages

  const resultForBlog: queryResult<BlogQuery> = await graphql(`
    query blog {
      allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        nodes {
          excerpt
          fields { slug }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
        }
      }
    }
  `)

  if (!assertQueryResult(resultForBlog)) {
    reporter.panicOnBuild(
      'There was an error in markdown loading for page generation',
      resultForBlog.errors
    )
    return
  }

  const heads = resultForBlog.data?.allMarkdownRemark.nodes

  if (heads === undefined) {
    reporter.panicOnBuild('Null check error in page generation')
    return
  }

  if (heads.length > 0) {
    for (let i = 0; i * perPage < heads.length; i += 1) {
      createPage({
        path: '/blog/' + (i === 0 ? '' : i.toString()),
        component: Blog,
        context: {
          title: 'Blog',
          posts: heads.slice(i * perPage, (i + 1) * perPage),
          pageIndex: i + 1,
          pageCount: Math.ceil(heads.length / perPage)
        }
      })
    }
  }
}

export default createPages
