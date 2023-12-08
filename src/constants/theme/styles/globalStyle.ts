import { createGlobalStyle, DefaultTheme } from 'styled-components';

import { defaultTheme } from '@/constants/theme/defaultTheme';

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
* {
  font-family: ${defaultTheme.fontFamily};
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  outline: none;
  padding: ${defaultTheme.spaces.zero}px;
  margin: ${defaultTheme.spaces.zero}px;
}`;
