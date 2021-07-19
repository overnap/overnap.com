/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'OVERNAP',
    author: 'Overnap',
    github: 'Overnap',
    email: 'overnapworks@gmail.com',
    description: 'a dev blog of overnap',
    siteUrl: 'https://localhost:8000',
    repository: 'Overnap/overnap.com' // for utterances
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/essential`,
        name: 'essential',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'anchor',
              maintainCase: false,
              removeAccents: true,
              elements: ['h1', 'h2', 'h3', 'h4']
            }
          },
          'gatsby-remark-prismjs'
        ],
      },
    },
  ],
}
