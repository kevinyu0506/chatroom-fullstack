import React, { Component } from 'react';
import './App.css';

import MessagesContainer from './component/MessagesContainer.js';
import TextBoxContainer from './component/TextBoxContainer.js';

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {"messages": [], "current_message":""};
    }

    render() {
        return (
            <div className="chat_window">
                <MessagesContainer/>
                <TextBoxContainer/>
            </div>
        );
    }
}

export default ChatApp;
