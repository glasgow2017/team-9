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
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user-dashboard" component={UserDashboard} />
          <Route path="/responder-dashboard" component={ResponderDashboard} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
