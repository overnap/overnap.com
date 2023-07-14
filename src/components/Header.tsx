import styled from '@emotion/styled'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { HeaderQuery } from '../graphqlTypes'

const StyledHeader = styled.header`
  padding: 1.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`

const StyledLink = styled(Link)`
  font-size: 5rem;
  font-weight: 700;
  text-decoration: none;
  display: inherit;
  user-select: none;

  @media screen and (max-width: 900px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`

interface Props {
  previousPath?: string
}

const Header = ({ previousPath }: Props) => {
  const data = useStaticQuery<HeaderQuery>(graphql`
    query header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  if (!data.site?.siteMetadata?.title) {
    return <div>Error!</div>
  }

  return (
    <StyledHeader>
      <StyledLink to="/">{data.site.siteMetadata.title}</StyledLink>
      <StyledLink to={previousPath ?? '/'}>←</StyledLink>
    </StyledHeader>
  )
}

export default Header
