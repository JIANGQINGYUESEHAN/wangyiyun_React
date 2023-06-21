import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import 'normalize.css';
import '@/assets/css/index.css'
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';
import '@/assets/css/index.less'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>

  </Provider>
);
