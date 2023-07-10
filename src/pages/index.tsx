import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { HomeQuery } from '../graphqlTypes'
import styled from '@emotion/styled'

const Menu = styled(Link)`
  display: block;

  font-size: 4.5rem;
  font-weight: 700;
  display: block;
  user-select: none;

  @media screen and (max-width: 900px) {
    font-size: 3.5rem;
    text-align: right;
  }
`

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
        <Menu to="/resume.pdf">ABOUT</Menu>
        <Menu to={'https://github.com/' + data.site.siteMetadata.github}>
          GITHUB
        </Menu>
        <Menu to={'mailto:' + data.site.siteMetadata.email}>EMAIL</Menu>
        <Menu to="/blog/1">BLOG</Menu>
        <Menu to="/tags">TAGS</Menu>
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
