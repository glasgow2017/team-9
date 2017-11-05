import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Grid, Row, Col, Panel, Image, ListGroup, ListGroupItem, Nav, NavItem } from 'react-bootstrap';
import ChatBox from '../components/ChatBox';


/*
  UserDashboard description
*/

class UserDashboard extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Row>
            <Nav bsStyle="pills" activeKey={1}>
              <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
              <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
              <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>
          </Row>
          <Row>
            <Col xsHidden md={3}>
              <Panel>
                <Image src='https://projects.scpr.org/static-files/_v4/images/default_avatar.png' rounded responsive />
                <br />
                <ListGroup>
                  <ListGroupItem>Name</ListGroupItem>
                  <ListGroupItem>Gender</ListGroupItem>
                  <ListGroupItem>name@email.com</ListGroupItem>
                  <ListGroupItem>Position</ListGroupItem>
                  <ListGroupItem href="#link2"><u>Settings</u></ListGroupItem>
                </ListGroup>
              </Panel>
            </Col>
            <Col>
              <ChatBox />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }

}

UserDashboard.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
