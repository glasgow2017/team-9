import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from '../misc/configureStore';

import App from './App';


const store = configureStore();

/*
  Root of the app
*/

export default class Root extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

}

Root.propTypes = {

};
