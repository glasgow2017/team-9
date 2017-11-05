import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/navbar.css';
import { logout } from '../actions/user';

/*
  DashboardNav description
*/

class DashboardNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navabarVisible: false,
    };
  }

  render() {
    return (
      <div>
        <Navbar
          inverse
          collapseOnSelect
          onToggle={state => this.setState({ navabarVisible: state })}
        >
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>
                Who Dares Cares
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.navabarVisible &&
                <NavItem>
                  <Row>
                    <Col xs={4}>
                      <Image src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" rounded responsive />
                    </Col>
                    <Col xs={8}>
                      <ListGroup>
                        <ListGroupItem>{this.props.user.name}</ListGroupItem>
                        <ListGroupItem>{this.props.user.email}</ListGroupItem>
                      </ListGroup>
                    </Col>
                  </Row>
                </NavItem>
              }
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
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav);
