import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FooterQuery } from '../graphqlTypes'

const StyledFooter = styled.footer`
  padding: 3rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 2rem;
  font-weight: 700;
  user-select: none;

  height: 3rem;
  margin: -7rem 0 0 0;
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
        {data.site.buildTime} © {data.site.siteMetadata.author.toUpperCase()}
      </span>
      <Link to="/rss.xml">RSS</Link>
    </StyledFooter>
  )
}

export default Footer
