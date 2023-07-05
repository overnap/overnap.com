import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FooterQuery } from '../graphqlTypes'

const StyledFooter = styled.footer`
  margin: 4rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 2rem;
  font-weight: 700;
  user-select: none;
`

const Footer = () => {
  const data = useStaticQuery<FooterQuery>(graphql`
    query footer {
      site {
        buildTime(formatString: "YYYY")
        siteMetadata {
          author
        }
      }
    }
  `)

  if (!data.site?.siteMetadata?.author) {
    return <div>Error!</div>
  }

  return (
    <StyledFooter>
      <span>
        {data.site!.buildTime!} © {data.site!.siteMetadata!.author!}
      </span>
      <Link to="RSS">RSS</Link>
    </StyledFooter>
  )
}

export default Footer
