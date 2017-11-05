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
              <p>Who Dares Cares is a non profit charity that has been developed to support people from all walks of life with PTSD. The charity has been set up by two former Scottish soldiers, Calum MacLeod (KOSB) and Colin MacLachlan (22 SAS).</p>
            </Col>
            <Col xs={12} md={4}>
                <img src={logo} className='img-responsive' />
            </Col>
            <Col xs={12} md={4} className='text-center'>
              <p>You do not have to have served in the military to be struggling or experience a trauma, it can happen to anyone of us at anytime. The charity aims to support people through activity and buddy buddy support systems so that no one should ever feel alone. Our motto "Who Dares Cares" means this....we dare you to care, become active in our charity work,support our activities, take part and raise funds to help our future activities.</p>
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
