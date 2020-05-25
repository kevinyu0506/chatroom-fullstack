import React, { Component } from 'react';
import './App.css';
import './css/chat_interface.css';
import './css/temporary.css';

import MessagesContainer from './component/MessagesContainer.js';
import TextBoxContainer from './component/TextBoxContainer.js';

// https://zh-hant.reactjs.org/docs/thinking-in-react.html
class ChatApp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {"messages": [], "current_message":""};
    // }

    render() {
        const MESSAGES = [
            {message: 'AAAA', isbotmessage: false},
            {message: 'BBBB', isbotmessage: true},
            {message: 'CCCC', isbotmessage: false},
            {message: 'DDDD', isbotmessage: true},
            {message: 'EEEE', isbotmessage: false},
            {message: 'FFFF', isbotmessage: true},
            {message: 'AAAA', isbotmessage: false},
            {message: 'BBBB', isbotmessage: true},
            {message: 'CCCC', isbotmessage: false},
            {message: 'DDDD', isbotmessage: true},
            {message: 'EEEE', isbotmessage: false},
            {message: 'FFFF', isbotmessage: true}
        ];

        return (
            <div className="chat_window">
                <MessagesContainer messages={MESSAGES}/>
                <TextBoxContainer/>
            </div>
        );
    }
}

export default ChatApp;
