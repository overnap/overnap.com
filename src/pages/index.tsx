import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { HomeQuery } from '../graphqlTypes'

interface Props {
  data: HomeQuery
}

const Home = ({ data }: Props) => {
  if (!data.site?.siteMetadata?.github || !data.site?.siteMetadata?.email) {
    return <div>Error!</div>
  }

  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Link to="/resume.pdf">ABOUT</Link>
        <Link to={"https://github.com/" + data.site!.siteMetadata!.github}>GITHUB</Link>
        <Link to={"mailto:" + data.site!.siteMetadata!.email}>EMAIL</Link>
        <Link to="/blog/1">BLOG</Link>
        <Link to="/tags">TAGS</Link>
      </Layout>
    </>
  )
}

export default Home

export const pageQuery = graphql`
  query home {
    site {
      siteMetadata {
        github
        email
      }
    }
  }
`
