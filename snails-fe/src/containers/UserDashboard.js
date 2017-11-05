import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
  UserDashboard description
*/

class UserDashboard extends Component {

  render() {
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
