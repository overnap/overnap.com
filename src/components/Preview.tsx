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
  display: block;
`

const Time = styled.div`
  font-size: 1rem;
  color: var(--color-gray);
  margin: 0 0 6px;
`

type UnArray<T extends any[]> = T extends (infer U)[] ? U : never

interface Props {
  post: UnArray<BlogQuery["allMarkdownRemark"]["nodes"]>
}

const Preview = ({ post }: Props) => {
  return (
    <Container>
      <Title to={`${post.fields.slug}`}>{post.frontmatter.title}</Title>
      <Time>
        {post.frontmatter.date} — {post.timeToRead} min read
      </Time>
      {post.frontmatter.tags.map(tag => (
        <Tag key={tag} tag={tag} />
      ))}
    </Container>
  )
}

export default Preview
