import styled from "@emotion/styled"
import React from "react"
import Footer from "./Footer"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"

const Main = styled.div`
  margin: auto;
  max-width: 920px;
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
