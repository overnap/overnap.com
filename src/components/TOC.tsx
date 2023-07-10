import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: 700;
  font-size: 1.75rem;
  user-select: none;
`

const Contents = styled.div<{ currentHeader: string }>`
  ul {
    padding-inline-start: 1rem;
    margin: 0;
    list-style: none;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    font-size: 17px;
    text-decoration: none;
    user-select: none;
  }

  a[href='${props => props.currentHeader}'] {
    font-weight: 600;
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
