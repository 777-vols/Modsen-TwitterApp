import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import { Loader } from './components/Loader/index.tsx';
import { GlobalStyle } from './constants/theme/styles/globalStyle.ts';
import { persistor, store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </HashRouter>
);
