import styled from "@emotion/styled"
import { graphql, Link, useStaticQuery } from "gatsby"
import { HeaderQuery } from "../graphqlTypes"

const StyledHeader = styled.header`
  margin: 0.9em auto 0.9em;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--color-black);
    user-select: none;
  }

  a:hover {
    color: var(--color-black);
  }
`

const Title = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  display: inherit;
`

const Page = styled(Link)`
  font-size: 1.25rem;
  margin-right: 1.25em;
`

const Github = styled.a`
  font-size: 1.25rem;
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

  if (!data.site?.siteMetadata?.title) {
    return (<div>Error!</div>)
  }

  return (
    <StyledHeader>
      <Title to='/'>{data.site!.siteMetadata!.title}</Title>
      <div>
        <Page to='/about'>About</Page>
        <Page to='/blog/1'>Blog</Page>
        <Github href={'https://github.com/' + data.site!.siteMetadata!.github}
                target='_blank' rel='noopener noreferrer'>Github</Github>
      </div>
    </StyledHeader>
  )
}

export default Header
