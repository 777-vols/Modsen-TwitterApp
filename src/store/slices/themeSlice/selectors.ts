import { TypeState } from '@/store';

export const themeSelector = (state: TypeState) => state.theme.isDarkTheme;
