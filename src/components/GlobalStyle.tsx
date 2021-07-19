import { css, Global } from "@emotion/react";

const reset = css`
@font-face {
  font-family: 'Noto Sans CJK KR';
  font-weight: 400;
  font-display: swap;
  src: local('Noto Sans CJK KR'),
       url('/fonts/NotoSansKR-Regular.woff2') format('woff2'),
       url('/fonts/NotoSansKR-Regular.woff') format('woff'),
       url('/fonts/NotoSansKR-Regular.otf') format('oft');
}

@font-face {
  font-family: 'Noto Sans CJK KR';
  font-weight: 500;
  font-display: swap;
  src: local('Noto Sans CJK KR'),
       url('/fonts/NotoSansKR-Medium.woff2') format('woff2'),
       url('/fonts/NotoSansKR-Medium.woff') format('woff'),
       url('/fonts/NotoSansKR-Medium.otf') format('oft');
}

@font-face {
  font-family: 'Noto Sans CJK KR';
  font-weight: 700;
  font-display: swap;
  src: local('Noto Sans CJK KR'),
       url('/fonts/NotoSansKR-Bold.woff2') format('woff2'),
       url('/fonts/NotoSansKR-Bold.woff') format('woff'),
       url('/fonts/NotoSansKR-Bold.otf') format('oft');
}

  html {
    font-family: 'Noto Sans CJK KR';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;

    --color-white: #fafcfc;
    --color-black: #2c2f33;
    --color-gray: #53565c;
    --color-weak: #8c989c;
    --color-active: #58626b;
    --color-point: #ff7473;
    --color-dark: #373f4d;
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
