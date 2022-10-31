import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyles = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.secondary};
    font-family: ${theme.font.secondary.family};
    overflow-x: hidden;
    color: ${theme.colors.fontPrimary};
  }
  button {
    cursor: pointer;
    border: none;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  &::selection {
    color: ${theme.colors.yellow};
    background:  ${theme.colors.secondary};
  }

  .globalLoader {
    position: fixed;
    display: inline-flexbox;
    justify-content: space-between;
    z-index: 99998;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    width: 100vw;
    transition: 2s;
  }

  .loader {
    /* position: absolute; */
    width: 50%;
    height: 100%;
    background-color: #09090a;
    transition: 2s;
  }

  .loader__1 {
    align-items: flex-start;
  }

  .loader__2 {
    align-items: flex-end;
  }

  .fade {
    width: 0;
    opacity: .95;
  }

  .loadingScreenLogo {
    transition: 2s;
  }

  .loadingScreenLogo__fadeout {
    opacity: 0;
  }
`