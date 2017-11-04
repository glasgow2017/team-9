import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
  Entry point of the app
*/

class App extends Component {

  render() {
    return (
      <div>
        <h1>XDDDDD</h1>
      </div>
    );
  }
}

App.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
