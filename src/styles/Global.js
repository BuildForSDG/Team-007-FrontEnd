import { createGlobalStyle } from 'styled-components';

const GlobalStlyes = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 12px;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStlyes;
