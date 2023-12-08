import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/constants/theme/themes';
import { themeSelector } from '@/store/slices/themeSlice/selectors';

import { Spinner, SpinnerWrapper } from './styled';
import { IProps } from './types';

export const Loader: FC<IProps> = ({ size }) => {
  const isDarkTheme = useSelector(themeSelector);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <SpinnerWrapper>
        <Spinner $size={size} />
      </SpinnerWrapper>
    </ThemeProvider>
  );
};
