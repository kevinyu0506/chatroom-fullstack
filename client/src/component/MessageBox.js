import React, { Component } from 'react';
import Avatar from './Avatar.js';

class MessageBox extends Component{
    render(){
        const appearance = this.props.appearance;
        const message = this.props.message;
        const name = this.props.name;

        return(
            <li className={`message ${appearance} appeared`}>
                <Avatar></Avatar>
                <div className="text_wrapper">
                    <div className="text">{message}</div>
                </div>
            </li>
      );
    }
}

export default MessageBox;