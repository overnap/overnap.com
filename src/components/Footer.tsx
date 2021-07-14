import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { FooterQuery } from "../graphqlTypes"

const StyledFooter = styled.footer`
  margin: auto;
  max-width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.span`
  color: #808080;
  font-size: 1rem;
  font-weight: 300;
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

  return (
    <StyledFooter>
      <Text>© {data.site!.buildTime} by {data.site!.siteMetadata!.author}</Text>
      <Text>Powered by Gatsby.js</Text>
    </StyledFooter>
  )
}

export default Footer
