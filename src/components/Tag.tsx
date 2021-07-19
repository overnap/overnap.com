import styled from "@emotion/styled"
import { Link } from "gatsby"
import useTagColor from "../hooks/useTagColor"

const TagContainer = styled(Link)<{ color: string }>`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-black);
  background-color: ${props => props.color || '#404040'};
  border-radius: 0.6em;
  padding: 0 7px 1px;
  margin: 1px 6px 1px 0;
`

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <TagContainer to={`/tag/${tag.replace(' ', '-')}/1`} color={useTagColor(tag)}>
      {tag}
    </TagContainer>
  )
}

export default Tag
