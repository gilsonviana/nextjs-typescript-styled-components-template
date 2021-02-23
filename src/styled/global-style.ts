import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<any>`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: ${(props) => props.theme.font.family.primary};
    margin: 0;
  }
`;
