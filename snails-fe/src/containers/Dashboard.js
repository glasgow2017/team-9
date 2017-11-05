import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import UserDashboard from './UserDashboard';
import ResponderDashboard from './ResponderDashboard';

/*
  Dashboard
*/

class Dashboard extends Component {

  render() {
    if (!this.props.user) {
      return (
        <Redirect to="/login" />
      );
    }
    if (this.props.user.responder === '0') {
      return (
        <UserDashboard />
      );
    }
    return (
      <ResponderDashboard />
    );
  }

}

Dashboard.propTypes = {
  user: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
