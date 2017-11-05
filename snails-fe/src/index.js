import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './misc/configureStore';
import Router from './config/Router';
import registerServiceWorker from './misc/registerServiceWorker';

async function init() {
  const store = await configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById('root'),
  );
}

init();
registerServiceWorker();
