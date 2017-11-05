import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/*
  ResponserDashboard description
*/

class ResponserDashboard extends Component {

  render() {
    return (
      <div>
        <p>ResponserDashboard screen</p>
      </div>
    );
  }

}

ResponserDashboard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ResponserDashboard);
