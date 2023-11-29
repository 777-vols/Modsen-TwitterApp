import { defaultTheme } from './defaultTheme';
import { ThemeColors } from './styles/themeColors';
import { ITheme } from './types';

export const lightTheme: ITheme = {
  background: ThemeColors.LIGHT_THEME_BG,
  color: ThemeColors.LIGHT_THEME_COLOR,
  ...defaultTheme
};

export const darkTheme: ITheme = {
  background: ThemeColors.DARK_THEME_BG,
  color: ThemeColors.DARK_THEME_COLOR,
  ...defaultTheme
};
