import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { HeaderQuery } from "../graphqlTypes"

const StyledHeader = styled.header`
  margin: auto;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  user-select: none;
  display: inherit;
`

const Page = styled(Link)`
  font-size: 1.25rem;
  font-weight: 300;
  user-select: none;
  margin-right: 1.25em;
`

const Github = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  user-select: none;
`

const Header = () => {
  const data = useStaticQuery<HeaderQuery>(graphql`
    query header {
      site {
        siteMetadata {
          title
          github
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Title to='/'>{data.site.siteMetadata.title}</Title>
      <div>
        <Page to='/about'>About</Page>
        <Page to='/posts'>Post</Page>
        <Github href={'https://github.com/' + data.site.siteMetadata.github}>Github</Github>
      </div>
    </StyledHeader>
  )
}

export default Header
