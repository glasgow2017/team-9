import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Grid, Col, Row,
  FormGroup, Form,
  FormControl, Button,
} from 'react-bootstrap';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import * as user from '../actions/user';
import '../css/login.css';


// eslint-disable-next-line
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*
  Login description
*/

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailValidated: null,
      loading: false,
    };
  }

  _onSubmit = async () => {
    // TODO: finish req
    if (!emailRegEx.test(this.state.email)) {
      this.setState({ emailValidated: 'error' });
      return;
    }

    try {
      await this.props.login(this.state.email, this.state.password);
      return;
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid fluid >
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <h1>Login</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
          <Col xs={12} md={8} mdOffset={2}>
            <Form horizontal>
              <FormGroup
                validationState={this.state.emailValidated}
              >
                <Col sm={2}>
                  <strong>Email</strong>
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col sm={2}>
                  <strong>Password</strong>
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col xsOffset={4} xs={4} mdOffset={5} md={2}>
            <Button
              type="submit"
              disabled={this.state.loading}
              onClick={() => this._onSubmit()}
              block
            >
              {this.state.loading ? 'Loggin in...' : 'Login'}
            </Button>
          </Col>
        </Grid>
        <Footer />
      </div>
    );
  }

}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(user.login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
