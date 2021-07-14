import { css, Global } from "@emotion/react";

const reset = css`
  @font-face {
    font-family: 'Apple SD Gothic Neo', 'Noto Sans', 'Malgun Gothic', arial, sans-serif;
  }

  html {
    --color-black: #000000;
    --color-weak: #676767;
    --color-gray: #505050;
    --color-active: #f16b6f;
  }

  a {
    color: var(--color-gray);
    text-decoration: none;
    transition: color 0.15s;
  }

  a:hover {
    color: var(--color-active);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1.1rem;
  }
`

const GlobalStyle = () => {
  return <Global styles={reset} />
}

export default GlobalStyle
