import React, { Component } from 'react';
import MessageBox from './MessageBox.js';

class MessagesContainer extends Component{
    render() {
        const rows = [];
        this.props.messages.forEach((message, index) => {
            rows.push(
                <MessageBox key={index}
                            message={message["message"]}
                            appearance={message["isbotmessage"] ? "left": "right"}
                            name={this.props.name}/>
            );
        });

        return(
            <ul className="messages">
                 {rows}
            </ul>
        );
    }
}

export default MessagesContainer;