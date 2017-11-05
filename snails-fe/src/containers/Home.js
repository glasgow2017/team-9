import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import logo from '../assets/logo.svg';
import { h1, Button, Grid, Row, Col } from 'react-bootstrap';
import '../css/home.css';

/*
  Entry point of the app
*/

class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1 className='text-center'>Welcome!</h1>
        <Grid>
          <Row>
            <Col xs={12} md={4} className='text-center'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
            <Col xs={12} md={4}>
                <img src={logo} className='img-responsive' />
            </Col>
            <Col xs={12} md={4} className='text-center'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} className='text-center triple-text'>
              <Button bsStyle='info' bsSize='large' block href='/login'>User</Button>
            </Col>
            <Col xs={12} md={6} className='text-center triple-text'>
              <Button bsStyle='warning' bsSize='large' block href='/login'>Responder</Button>
            </Col>
          </Row>
        </Grid>
        <Footer />
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
