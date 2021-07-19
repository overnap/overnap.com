import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { FooterQuery } from "../graphqlTypes"

const StyledFooter = styled.footer`
  margin: 2.5em auto 0.9em;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.span`
  color: var(--color-gray);
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

  if (!data.site?.siteMetadata?.author) {
    return (<div>Error!</div>)
  }

  return (
    <StyledFooter>
      <Text>© {data.site!.buildTime!} by {data.site!.siteMetadata!.author!}</Text>
      <Text>Powered by Gatsby.js</Text>
    </StyledFooter>
  )
}

export default Footer
