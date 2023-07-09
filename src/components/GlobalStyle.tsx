import { css, Global } from '@emotion/react'

const reset = css`
  html {
    font-family: 'Inter', 'Noto Sans KR';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    height: 100%;

    --color-white: #f0f2f3;
    --color-black: #000000;
    --color-gray: #53565c;
    --color-weak: #687d87;
    --color-active: #4a5b69;
    --color-dark: #373f4d;

    @media screen and (max-width: 900px) {
      font-size: 13px;
    }
  }

  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    margin: 0;
  }

  body {
    padding: 0 16px;
  }

  *::selection {
    color: var(--color-white);
    background-color: var(--color-dark);
  }

  a {
    color: var(--color-black);
    text-decoration: underline;
    // transition: color 0.25s;
  }

  // a:hover {
  //   color: var(--color-active);
  // }

  a:active,
  a:focus {
    outline: 0;
    border: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  span {
    color: var(--color-black);
  }

  h1,
  h2,
  h3 {
    font-weight: 700;
  }

  h4,
  h5,
  h6 {
    font-weight: 500;
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

  blockquote {
    border-left: 6px solid var(--color-white);
    margin: 1.5em 0em;
    padding: 0.5em 1.5em;
  }

  // for inline code block
  code[class='language-text'] {
    margin: 0 2px;
    padding: 1px 4px 2px !important;
    background-color: var(--color-white) !important;
    color: var(--color-gray) !important;
  }
`

const GlobalStyle = () => {
  return <Global styles={reset} />
}

export default GlobalStyle
