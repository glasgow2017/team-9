import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel, Image, ListGroup, ListGroupItem, Nav, NavItem } from 'react-bootstrap';

import DashboardNav from '../components/DashboardNav';
import Footer from '../components/Footer';
import ChatBox from '../components/ChatBox';


/*
  UserDashboard description
*/

class UserDashboard extends Component {

  render() {
    return (
      <div className="dashboard-root">
        <DashboardNav />
        <Grid>
          <Row>
            <Col xsHidden md={3}>
              <Panel>
                <Image src="https://projects.scpr.org/static-files/_v4/images/default_avatar.png" rounded responsive />
                <br />
                <ListGroup>
                  <ListGroupItem>{this.props.user.name}</ListGroupItem>
                  <ListGroupItem>{this.props.user.email}</ListGroupItem>
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
