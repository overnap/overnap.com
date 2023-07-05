import styled from '@emotion/styled'
import { graphql, Link, useStaticQuery, navigate } from 'gatsby'
import { HeaderQuery } from '../graphqlTypes'

const StyledHeader = styled.header`
  margin: 1.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  font-size: 5rem;
  font-weight: 700;
  text-decoration: none;
  display: inherit;
  color: var(--color-black);
  user-select: none;
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
      <StyledLink to="/">{data.site!.siteMetadata!.title}</StyledLink>
      <StyledLink to={previousPath ?? "/"}>&lt;-</StyledLink>
    </StyledHeader>
  )
}

export default Header
