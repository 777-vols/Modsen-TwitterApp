import { FC } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import GlobalStyle from './constants/theme/styles/globalStyle';
import { darkTheme, lightTheme } from './constants/theme/themes';
import { themeSelector } from './store/slices/themeSlice/selectors';

const App: FC = () => {
  const isDarkTheme = useSelector(themeSelector);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyle theme={theme} />
        <Layout />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
