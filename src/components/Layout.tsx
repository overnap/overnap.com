import styled from '@emotion/styled'
import React from 'react'
import Footer from './Footer'
import GlobalStyle from './GlobalStyle'
import Header from './Header'

const Main = styled.div`
  margin: 0rem 1rem;

  a {
    font-size: 4.5rem;
    font-weight: 700;
    text-decoration: underline;
    display: block;
    user-select: none;
  }
`

interface Props {
  children?: React.ReactNode,
  previousPath?: string
}

const Layout = ({ children, previousPath }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header previousPath={previousPath}/>
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
