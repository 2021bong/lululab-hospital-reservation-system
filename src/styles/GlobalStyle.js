import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  }

  body {
    background-color: #eee;
  }

  ul, ol, li {
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #000;
  }

  button {
    cursor: pointer;
  }

  body{
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  b {
    font-weight: 700;
  }

`;

export default GlobalStyle;
