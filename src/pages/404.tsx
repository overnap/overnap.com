import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <>
      <Layout>
        <h1>404 Page Not Found</h1>
        <div>Sorry, the content you are looking for does not found.</div>
      </Layout>
    </>
  )
}

export default NotFound

export const Head = () => <SEO title="404" />
