import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Grid, Col, Row,
  FormGroup, Form,
  FormControl, Button,
  ControlLabel, Alert,
} from 'react-bootstrap';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import * as user from '../actions/user';
import '../css/login.css';

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
      nameValidated: null,
      emailValidated: null,
      passwordValidated: null,
      loading: false,
      error: false,
    };
  }

  _onSubmit = async () => {
    if (this.state.name.length < 1) {
      this.setState({ nameValidated: 'error' });
      this.setState({ error: 'Name is required' });
      return;
    }
    this.setState({ nameValidated: null });
    if (!emailRegEx.test(this.state.email)) {
      this.setState({ emailValidated: 'error' });
      this.setState({ error: 'E-mail address not valid' });
      return;
    }
    this.setState({ emailValidated: null });
    if (this.state.password.length < 6) {
      this.setState({ passwordValidated: 'error' });
      this.setState({ error: 'Password has to be at least 6 characters long' });
      return;
    }
    this.setState({ passwordValidated: null });
    this.setState({ error: false });
    this.setState({ loading: true });
    try {
      const form = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.signUp(form);
    } catch (err) {
      console.log(err);
      this.setState({ error: err.message });
      this.setState({ loading: false });
      return;
    }

    setTimeout(async () => {
      try {
        await this.props.login(this.state.email, this.state.password);
        this.props.history.push('/dashboard');
        return;
      } catch (e) {
        console.log(e);
        this.props.history.push('/login');
        this.setState({ loading: false });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid fluid >
        <Row>
          <Col xs={12} md={8} mdOffset={2}> 
            <h1>Sign up</h1>
            <p>Sega e dva chasa. Nie sme zaedno v otbor i rabotim po blagotvoritelen proekt. bla bla bla blah. neprotivokonstitucionstvuvatelstvuvaite nejneobhospodarovavatitelnejsimu. Не искам да бъда тук Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>
          <Col xs={12} md={8} mdOffset={2}>
            {this.state.error &&
              <Alert bsStyle="danger">
                <strong>Holy guacamole! </strong>
                {this.state.error}
              </Alert>
            }
            <Form horizontal>
              <FormGroup validationState={this.state.nameValidated}>
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
<Footer />
      </div>
    );
  }

}

Signup.propTypes = {
  history: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: form => dispatch(user.signUp(form)),
    login: (email, password) => dispatch(user.login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
