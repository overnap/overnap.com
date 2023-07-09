import styled from '@emotion/styled'
import { Link } from 'gatsby'

const TagContainer = styled(Link)`
  color: var(--color-black);
`

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <TagContainer to={`/tag/${tag.replace(' ', '-')}/1`}>
      {tag.toUpperCase()}
    </TagContainer>
  )
}

export default Tag
