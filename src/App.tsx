import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import AllRouters from './components/AllRouters';
import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './constants/styles/globalStyle';
import theme from './constants/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <GlobalStyle theme={theme} />
      <AllRouters />
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
