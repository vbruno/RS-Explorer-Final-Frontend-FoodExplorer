import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-family: 'Roboto', serif;

    font-size: 62.5%;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input, button, textarea:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;
