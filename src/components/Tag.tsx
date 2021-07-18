import styled from "@emotion/styled"
import { Link } from "gatsby"
import useTagColor from "../hooks/useTagColor"

const TagContainer = styled(Link)<{ color: string }>`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--color-black);
  background-color: ${props => props.color || '#404040'};
  border-radius: 0.5rem;
  padding: 1px 8px;
  margin: 1px 5px 1px 0px;
  opacity: 0.8;
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
