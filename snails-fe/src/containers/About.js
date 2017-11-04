import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
  Entry point of the app
*/

class About extends Component {

  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }

}

About.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
