import { css, Global } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: 'Apple SD Gothic Neo', 'Noto Sans', 'Malgun Gothic', arial, sans-serif;
  }

  a {
    color: #757575;
    text-decoration: none;
  }

  a:hover {
    color: #696969;
  }
`

const GlobalStyle = () => {
  return <Global styles={reset} />
}

export default GlobalStyle
