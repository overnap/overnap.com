import styled from "@emotion/styled"
import { Link } from "gatsby"
import { BlogQuery } from "../graphqlTypes"

const Container = styled.div`
  padding: 16px 3px;
`

const Title = styled(Link)`
  font-size: 2rem
`

const Time = styled.div`
  font-size: 1rem;
  margin: 2px 0 1px;
`

const Description = styled.span`
  font-size: 0.85rem;
  display: block;
`

type UnArray<T extends any[]> = T extends (infer U)[] ? U : never

interface Props {
  post: UnArray<BlogQuery['allMarkdownRemark']['nodes']>
}

const Preview = ({ post }: Props) => {
  return (
    <Container>
      <Title to={`/${post.fields.slug}`}>{post.frontmatter.title}</Title>
      <Time>{`${post.frontmatter.date} - ${post.timeToRead} min`}</Time>
      <Description>{post.frontmatter.description || post.excerpt}</Description>
    </Container>
  )
}

export default Preview
