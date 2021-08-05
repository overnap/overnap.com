import { css, Global } from "@emotion/react";

const reset = css`
  html {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;

    --color-white: #fafcfc;
    --color-black: #2c2f33;
    --color-gray: #53565c;
    --color-weak: #6f7c82;
    --color-active: #56636e;
    --color-dark: #373f4d;

    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }

  body {
    padding: 0 10px;
  }

  *::selection {
    color: var(--color-white);
    background-color: var(--color-dark);
  }

  a {
    color: var(--color-weak);
    text-decoration: none;
    transition: color 0.25s;
  }

  a:hover {
    color: var(--color-active);
  }

  a:active, a:focus {
    outline: 0;
    border: none;
  }

  h1, h2, h3, h4, h5, h6, div, span {
    color: var(--color-black);
  }

  h1, h2, h3 {
    font-weight: 700;
  }

  h4, h5, h6 {
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

  // for inline code block
  code[class="language-text"] {
    margin: 0 2px;
    padding: 1px 4px 2px !important;
  }
`

const GlobalStyle = () => {
  return <Global styles={reset} />
}

export default GlobalStyle
