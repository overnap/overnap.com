import styled from "@emotion/styled"
import { Link } from "gatsby"
import { BlogQuery } from "../graphqlTypes"
import Tag from "./Tag"

const Container = styled.div`
  padding: 25px 3px;
`

const Title = styled(Link)`
  font-weight: 600;
  font-size: 1.75rem;
  color: var(--color-black);
`

const Time = styled.div`
  font-size: 1rem;
  color: var(--color-gray);
  margin: 2px 0 15px;
`

const Description = styled.span`
  font-size: 1rem;
  color: var(--color-gray);
  display: block;
`

type UnArray<T extends any[]> = T extends (infer U)[] ? U : never

interface Props {
  post: UnArray<BlogQuery['allMarkdownRemark']['nodes']>
}

const Preview = ({ post }: Props) => {
  return (
    <Container>
      <Title to={`${post.fields.slug}`}>{post.frontmatter.title}</Title>
      <Description>{post.frontmatter.description || post.excerpt}</Description>
      <Time>{`${post.frontmatter.date} - ${post.timeToRead} min`}</Time>
      {post.frontmatter.tags.map(tag => (<Tag key={tag} tag={tag} />))}
    </Container>
  )
}

export default Preview
