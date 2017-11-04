import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import "../css/footer.css";
var FontAwesome = require('react-fontawesome');

/*
  Footer description
*/

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>
          <ul className="list-unstyled">
            <li><a href="#">About</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Copyright blah blah blah</a></li>
          </ul>
        </div>
        <div>
          <ul className="social">
            <li><a href="#"><FontAwesome name='rocket' size='100px' /></a></li>
            <li><a href="#"><FontAwesome name="twitter" /></a></li>
            <li><a href="#"><FontAwesome name="reddit" /></a></li>
            <li><a href="#"><FontAwesome name="flickr" /></a></li>
            <li><a href="#"><FontAwesome name="tumblr" /></a></li>
          </ul>
        </div>
        <div>
          <ul className="list-unstyled">
            <li>Address</li>
            <li>Email</li>
          </ul>
        </div>
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
