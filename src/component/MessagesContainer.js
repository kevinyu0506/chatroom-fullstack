import React, { Component } from 'react';
import MessageBox from './MessageBox.js';

class MessagesContainer extends Component{
    // constructor(props) {
    //     super(props);
    //     this.createBotMessages = this.createBotMessages.bind(this);
    //     this.addMessageBox = this.addMessageBox.bind(this);
    // }

    // createBotMessages(){
    //     console.log(this.state.messages);
    //     return this.state.messages.map((message, index) =>
    //     <MessageBox key={index} message={message["message"]} appearance={message["isbotmessage"] ? "left": "right"}/>
    //     );
    // }

    // addMessageBox(enter=true) {
    //     let messages = this.state.messages;
    //     let current_message = this.state.current_message;
    //     console.log("addMessageBox triggered");
    //     console.log(this.state);
    //     if(current_message && enter){
    //         messages = [...messages, {"message":current_message}];
    //         fetch("http://localhost:5000?message=" + current_message)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //               console.log(result);
    //               this.setState({
    //                 messages: [...messages, {"message":result["message"], "isbotmessage":true}]
    //               });
    //             },
    //             (error) => {
    //               //do nothing for now
    //             }
    //         );
    //         current_message = ""
    //     }  
    //     this.setState({
    //         current_message: current_message,
    //         messages
    //     });
    // }

    render() {
        const rows = [];

        this.props.messages.forEach((message, index) => {
            rows.push(
                <MessageBox index={index}
                            message={message["message"]}
                            appearance={message["isbotmessage"] ? "left": "right"}/>
            );
        });

        return(
            // <ul className="messages">
            //     {this.createBotMessages()}
            // </ul>
            // <ul classNane="messages">
            //     <MessageBox key={index} message={message["message"]} appearance={message["isbotmessage"] ? "left": "right"}/>
            // </ul>
            <ul className="messages">
                 {rows}
            </ul>
        );
    }
}

export default MessagesContainer;