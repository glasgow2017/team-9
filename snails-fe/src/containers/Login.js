import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Col, Row,
  FormGroup, Form,
  FormControl, Button,
} from 'react-bootstrap';

import NavBar from '../components/NavBar';

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

  _onSubmit = () => {
    // TODO: finish req
    if (!emailRegEx.test(this.state.email)) {
      this.setState({ emailValidated: 'error' });
      return;
    }
    console.log(this.state);
  }

  render() {
    return (
      <Grid fluid >
        <NavBar />
        <Col xs={12} md={8} mdOffset={2}>
          <Form horizontal>
            <FormGroup
              validationState={this.state.emailValidated}
            >
              <Col sm={2}>
                Email
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
                Password
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
        <Col xsOffset={4} xs={4}>
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
    );
  }

}

Login.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
