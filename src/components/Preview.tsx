import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { BlogQuery } from '../graphqlTypes'

const Title = styled(Link)`
  margin: 0.15em 0;
  font-size: 4rem;
  font-weight: 700;
  display: block;
  user-select: none;

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
    text-align: right;
  }
`

type UnArray<T extends any[]> = T extends (infer U)[] ? U : never

interface Props {
  post: UnArray<BlogQuery['allMarkdownRemark']['nodes']>
}

const Preview = ({ post }: Props) => {
  return <Title to={`${post.fields.slug}`}>{post.frontmatter.title}</Title>
}

export default Preview
