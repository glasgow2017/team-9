import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  Grid, Col, Row,
  FormGroup, Form,
  FormControl, Button,
  Checkbox,
} from 'react-bootstrap';

/*
  Login description
*/

class Login extends Component {

  render() {
    return (
      <Grid fluid >
        <Col xs={12}>
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
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
