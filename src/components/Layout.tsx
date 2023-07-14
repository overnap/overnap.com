import styled from '@emotion/styled'
import React from 'react'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

const Main = styled.div`
  padding: 0rem 1rem;
  height: auto;
  min-height: calc(100% - 14.5rem);
  padding-bottom: 7rem;
`

interface Props {
  children?: React.ReactNode
  previousPath?: string
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
