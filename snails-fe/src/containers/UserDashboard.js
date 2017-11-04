import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/*
  UserDashboard description
*/

class UserDashboard extends Component {

  render() {
    if (!this.props.user) {
      return (
        <Redirect to="/login" />
      );
    }
    return (
      <div>
        <p>UserDashboard screen</p>
      </div>
    );
  }

}

UserDashboard.propTypes = {
  user: PropTypes.any.isRequired,
  location: PropTypes.any.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
