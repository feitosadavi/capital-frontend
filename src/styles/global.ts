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
    color: ${theme.colors.primary};
    background:  ${theme.colors.primary};
  }
`