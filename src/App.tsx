import { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { Background } from './components/EditProfileModal/styled';
import ErrorBoundary from './components/ErrorBoundary';
import { Loader } from './components/Loader';
import { darkTheme, lightTheme } from './constants/theme/themes';
import { themeSelector } from './store/slices/themeSlice/selectors';

const Layout = lazy(() => import('./components/Layout'));

const App: FC = () => {
  const isDarkTheme = useSelector(themeSelector);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Suspense
          fallback={
            <Background>
              <Loader />
            </Background>
          }>
          <Layout />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
