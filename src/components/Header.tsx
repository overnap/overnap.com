import styled from '@emotion/styled'
import { graphql, Link, navigate, useStaticQuery } from 'gatsby'
import { HeaderQuery } from '../graphqlTypes'
import { css } from '@emotion/react'

const StyledHeader = styled.header`
  padding: 1.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
`

const textStyle = css`
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

const HomeLink = styled(Link)`
  ${textStyle}
`

const PreviousPage = styled.div`
  ${textStyle}
`

const Header = () => {
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
      <HomeLink to="/">{data.site.siteMetadata.title.toUpperCase()}</HomeLink>
      <PreviousPage
        onClick={() => {
          navigate(-1).catch(err => console.log(err))
        }}
      >
        ←
      </PreviousPage>
    </StyledHeader>
  )
}

export default Header
