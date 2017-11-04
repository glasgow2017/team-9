import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

/*
  Footer description
*/

class Footer extends Component {

  render() {
    return (
      <div>
        <p>Footer screen</p>
      </div>
    );
  }
}

Footer.propTypes = {

};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
