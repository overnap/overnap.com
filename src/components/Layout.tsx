import styled from "@emotion/styled"
import React from "react"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"

const Main = styled.div`
  margin: auto;
  max-width: 800px;
  min-height: calc(100vh - 11.25em);
  display: block;
`

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
