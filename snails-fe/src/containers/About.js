import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import NavBar from '../components/NavBar';
/*
  Entry point of the app
*/

class About extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <h1>About us</h1>
          <p>We are quite cool!</p>
        </Grid>
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
