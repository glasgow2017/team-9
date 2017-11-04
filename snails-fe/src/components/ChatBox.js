import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

/*
  ChatBox description
*/

class ChatBox extends Component {

  render() {
    return (
      <div>
        <p>ChatBox screen</p>
      </div>
    );
  }
}

ChatBox.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
