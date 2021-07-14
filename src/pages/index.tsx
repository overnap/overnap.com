import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Home = ({ data }) => {
  return (
    <>
    <SEO title='test' />
    <Layout>
      hello world!
    </Layout>
    </>
  )
}

export default Home
