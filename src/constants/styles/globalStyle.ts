import { createGlobalStyle, DefaultTheme } from 'styled-components';

import theme from '@/constants/theme';

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
* {
  font-family: ${theme.fontFamily};
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  padding: ${theme.spaces.zero}px;
  margin: ${theme.spaces.zero}px;
}`;

export default GlobalStyle;
