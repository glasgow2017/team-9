import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/navbar.css';
import { logout } from '../actions/user';

/*
  DashboardNav description
*/

class DashboardNav extends Component {

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
            <Nav pullRight>
              <LinkContainer to="/login">
                <NavItem
                  eventKey={1}
                  onClick={() => this.props.logout()}
                >
                  Logout
                </NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

DashboardNav.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);
