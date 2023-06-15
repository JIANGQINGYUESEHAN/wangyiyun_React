import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import 'normalize.css';
import './assets/css/index.less';
import { HashRouter } from 'react-router-dom';
import store from './store/index';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
