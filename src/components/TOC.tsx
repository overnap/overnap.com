import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  max-width: 260px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0 0 8px 10px;
  user-select: none;
`

const Contents = styled.div<{ currentHeader: string }>`
  ul {
    padding: 0;
    margin: 0 0 0 12px;
    list-style: none;
  }

  p {
    margin: 0;
  }

  a {
    font-size: 0.9rem;
    user-select: none;
    transition: color 0.15s, font-size 0.15s, font-weight 0.15s;
  }

  a[href="${props => props.currentHeader}"] {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color--black);
  }
`

interface Props {
  html: string
  currentHeader: string
}

const TOC = ({ html, currentHeader }: Props) => {
  return html ? (
    <Container>
      <Title>Table Of Contents</Title>
      <Contents
        dangerouslySetInnerHTML={{ __html: html }}
        currentHeader={currentHeader}
      />
    </Container>
  ) : (
    <React.Fragment />
  )
}

export default TOC
