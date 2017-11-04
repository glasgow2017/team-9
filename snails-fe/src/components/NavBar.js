import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

/*
  NavBar description
*/

class NavBar extends Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <LinkContainer to="/">
            <Navbar.Header>
              <Navbar.Brand>
                Who Dares Cares
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </LinkContainer>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/about">
                <NavItem eventKey={1}>About us</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem eventKey={1}>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/signup">
                <NavItem eventKey={1}>Sign Up</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
