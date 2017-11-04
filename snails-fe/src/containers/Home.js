import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/*
  Entry point of the app
*/

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }

}

Home.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
