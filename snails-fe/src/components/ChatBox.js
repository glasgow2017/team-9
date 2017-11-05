import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as token from '../actions/token';
import {
  Grid, Col, Row,
  FormGroup, Form,
  FormControl, Button,
} from 'react-bootstrap';

/*
  ChatBox description
*/

class ChatBox extends Component {



  constructor(props) {
    super(props);

    this.state = {
      connection: new WebSocket('ws://34.241.64.98:8088/'),
      userId: null,
      messages: [],
      mess: ''
    };


    this.state.connection.onmessage = function (event)
    {
       let incoming  = JSON.parse(event.data);

       if ('targetId' in incoming)
       {
         this.state.userId = incoming.targetId;

         let firstMessage = {targetId: this.state.userId, message: 'hey b0ss'};
         this.state.connection.send(JSON.stringify(firstMessage));
       }

       if ('message' in incoming)
       {
         let tempMsg = this.state.messages;
         tempMsg.push('Me: ' + incoming.message);

         this.setState({ messages: tempMsg});
       }
    }.bind(this);

   this.state.connection.onopen = function (event)
   {
     let auth = {auth: 'auth', token: this.props.token};
     this.state.connection.send(JSON.stringify(auth));
   }.bind(this);

  }

  sendMessage = () =>{
    let tempMsg = this.state.messages;
    tempMsg.push('You: ' + this.state.mess);

    this.setState({ messages: tempMsg});

    let send = {message: this.state.mess, targetId: this.state.userId}
    this.state.connection.send(JSON.stringify(send));

    this.setState({mess: ''});
  }

  render() {
    return (
      <div>

       {this.state.messages.map(function (message, index) {
         return <div key={ index }><span>{ message }</span><br /></div>;
       })}

         <FormControl
           type="text"
           placeholder="message"
           value={this.state.mess}
           onChange={e => this.setState({ mess: e.target.value })}
         />
       <div><Button style={{float: 'right',}} onClick={() => this.sendMessage() }>Send</Button></div>

      </div>
    );
  }
}

ChatBox.propTypes = {

};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBox);
