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
            <li><a href="#">Terms and Conditions</a></li><br />
            <li>Copyright stuff and fancy text</li>
          </ul>
        </div>
        <div>
          <ul className="social">
            <li><a href="#"><FontAwesome name='rocket' size='2x' fixedWidth /></a></li>
            <li><a href="#"><FontAwesome name="twitter" size='2x' fixedWidth /></a></li>
            <li><a href="#"><FontAwesome name="reddit" size='2x' fixedWidth /></a></li>
            <li><a href="#"><FontAwesome name="flickr" size='2x' fixedWidth /></a></li>
            <li><a href="#"><FontAwesome name="tumblr" size='2x' fixedWidth /></a></li>
          </ul>
        </div>
        <div>
          <ul className="list-unstyled" className='text-right'>
            <li>2 Taylor Place, Glasgow 12354</li>
            <li>admin@supportthepeople.com</li>
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
