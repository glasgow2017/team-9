import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// Screens:
import Home from '../containers/Home';
import About from '../containers/About';


/*
  Entry point of the app
*/

export default class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }

}

Router.propTypes = {

};
