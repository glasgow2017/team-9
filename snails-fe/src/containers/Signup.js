import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Col,
  FormGroup, Form,
  FormControl, Button,
  ControlLabel,
} from 'react-bootstrap';

import NavBar from '../components/NavBar';

// eslint-disable-next-line
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/*
  Signup description
*/

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      emailValidated: null,
      passwordValidated: null,
      loading: false,
    };
  }

  _onSubmit = () => {
    if (!emailRegEx.test(this.state.email)) {
      this.setState({ emailValidated: 'error' });
    }
    if (this.state.password.length > 6) {
      this.setState({ passwordValidated: 'error' });
    }
    if (this.state.emailValidated && this.state.passwordValidated) {
      return;
    }
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid fluid >
          <Col xs={12} md={8} mdOffset={2}>
            <Form horizontal>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </FormGroup>
              <FormGroup validationState={this.state.emailValidated}>
                <ControlLabel>E-mail</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="Enter your e-mail"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup validationState={this.state.passwordValidated}>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
            </Form>
          </Col>
          <Col xsOffset={4} xs={4} mdOffset={4} md={4}>
            <Button
              type="submit"
              disabled={this.state.loading}
              onClick={() => this._onSubmit()}
              block
            >
              {this.state.loading ? 'Signing up...' : 'Sing up!'}
            </Button>
          </Col>
        </Grid>
      </div>
    );
  }
}

Signup.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
