import React, { Component } from 'react';
import './App.css';
import './css/chat_interface.css';
import './css/temporary.css';

import MessagesContainer from './component/MessagesContainer.js';
import TextBoxContainer from './component/TextBoxContainer.js';

// https://zh-hant.reactjs.org/docs/thinking-in-react.html
class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.handleTextBoxEnter = this.handleTextBoxEnter.bind(this);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        this.state = {
            messages: [],
            current_message: ""
        };
    }

    // Keep track of the current message
    handleTextBoxChange(text) {
        this.setState({
            current_message: text
        });
    }

    // Add current message to messages[] list
    handleTextBoxEnter() {
        const current_message = this.state.current_message;
        const newElement = {
            message: current_message,
            isbotmessage: false
        };
        const newBotResponse = {
            message: "I'm robot",
            isbotmessage: true
        };
        this.setState( prevstate => ({
            messages: [...prevstate.messages, newElement, newBotResponse],
            current_message: ""
        }));
    }

    render() {
        return (
            <div className="chat_window">
                <MessagesContainer messages={this.state.messages}
                                   current_message={this.state.current_message}/>
                <TextBoxContainer onTextBoxEnter={this.handleTextBoxEnter}
                                  onTextBoxChange={this.handleTextBoxChange}
                                  current_message={this.state.current_message}/>
            </div>
        );
    }
}

export default ChatApp;
