import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from '../misc/configureStore';
import Router from '../config/Router';

const store = configureStore();
let shouldRedirect = false;
persistStore(store, undefined, () => {
  if (store.getState().user) {
    shouldRedirect = true;
  }
});

/*
  Root of the app
*/

export default class Root extends Component {

  componentWillRender() {
    if (shouldRedirect) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}
