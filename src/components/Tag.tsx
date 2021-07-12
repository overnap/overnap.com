import styled from "@emotion/styled"
import { Link } from "gatsby"
import useTagColor from "../hooks/useTagColor"

const TagContainer = styled(Link)<{ color: string }>`
  font-size: 0.85rem;
  font-weight: bold;
  color: #404040;
  background-color: ${props => props.color || '#404040'};
  border-radius: 0.5rem;
  padding: 1px 8px;
  margin: 1px 5px 1px 0px;
`

interface Props {
  tag: string
}

const Tag = ({ tag }: Props) => {
  return (
    <TagContainer to={`/tag/${tag}`} color={useTagColor(tag)}>
      {tag}
    </TagContainer>
  )
}

export default Tag
