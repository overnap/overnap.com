/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Seunghwan Kim',
    alternateTitle: ['SHK', 'overnap'],
    author: 'Seunghwan Kim',
    github: 'overnap',
    email: 'overnapworks@gmail.com',
    description: "Seunghwan Kim's personal website",
    siteUrl: 'https://overnap.com',
    repository: 'overnap/overnap.com', // for utterances
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-KS9KZ7NLYV'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields { 
                      slug 
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Seunghwan Kim's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              wrapperStyle: 'margin: 3rem auto;',
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'anchor',
              maintainCase: false,
              removeAccents: true,
              elements: ['h1', 'h2', 'h3', 'h4'],
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-external-links',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-katex',
          'gatsby-remark-smartypants',
        ],
      },
    },
  ],
}
