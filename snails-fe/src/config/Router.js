import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Screens:
import Home from '../containers/Home';
import About from '../containers/About';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Dashboard from '../containers/Dashboard';
import UserDashboard from '../containers/UserDashboard';
import ResponderDashboard from '../containers/ResponderDashboard';

/*
  Entry point of the app
*/

class Router extends Component {

  render() {
    console.log(this.props.token);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              this.props.user ? (
                <Redirect to="/dashboard" />
              ) : (
                <Home />
              )
            )}
          />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={() => (
              this.props.user ? (
                <Redirect to="/dashboard" />
              ) : (
                <Login />
              )
            )}
          />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }

}

Router.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
