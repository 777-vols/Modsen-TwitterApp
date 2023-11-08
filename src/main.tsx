import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';
import { store } from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
