import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '@/components/Layout';

import GlobalStyle from './constants/styles/globalStyle';
import theme from './constants/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle theme={theme} />
    <Layout />
  </ThemeProvider>
);

export default App;
