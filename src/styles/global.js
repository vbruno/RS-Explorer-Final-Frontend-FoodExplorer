import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    /* font-size: 10px; */

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      /* font-size: 31.25%; */
      font-size: 41.67%;
      /* font-size: 9px; */
    }
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }
  input, button, textarea {
    font-family: 'Roboto', serif;
    font-size: 1rem;
  }

  input, button, textarea:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`;
