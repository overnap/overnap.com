/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "OVERNAP",
    author: "Overnap",
    github: "Overnap",
    email: "overnapworks@gmail.com",
    description: "a dev blog of overnap",
    siteUrl: "https://overnap.com",
    repository: "Overnap/overnap.com", // for utterances
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-KS9KZ7NLYV"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/blog`,
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/essential`,
        name: "essential",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              wrapperStyle: "margin: 3rem auto;",
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              className: "anchor",
              maintainCase: false,
              removeAccents: true,
              elements: ["h1", "h2", "h3", "h4"],
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-external-links",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-numbered-footnotes",
          "gatsby-remark-katex",
          "gatsby-remark-smartypants",
        ],
      },
    },
  ],
}
