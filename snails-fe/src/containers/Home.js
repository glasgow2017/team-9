import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ChatBox from '../components/ChatBox';
import NavBar from '../components/NavBar';

/*
  Entry point of the app
*/

class Home extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <h1>Home</h1>
        <ChatBox />

      </div>
    );
  }

}

Home.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
