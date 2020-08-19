import React, { Component } from 'react';
import './App.css';
import './css/chat_interface.css';
import './css/temporary.css';

import MessagesContainer from './component/MessagesContainer.js';
import TextBoxContainer from './component/TextBoxContainer.js';

import webSocket from 'socket.io-client'

// https://zh-hant.reactjs.org/docs/thinking-in-react.html
class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.isInit = false;
        this.handleTextBoxEnter = this.handleTextBoxEnter.bind(this);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        this.createMessage = this.createMessage.bind(this);
        this.state = {
            messages: [],
            current_message: "",
            ws: null,
            name: ""
        };
    }

    // https://medium.com/enjoy-life-enjoy-coding/react-%E5%9C%A8-react-%E4%B8%AD%E4%BD%BF%E7%94%A8-websocket-feat-socket-io-%E5%9F%BA%E6%9C%AC%E6%95%99%E5%AD%B8-2e3483ad5c80
    componentDidMount() {
        let person = prompt("Please enter your name", "Harry Potter");

        this.setState({
            ws: webSocket('http://localhost:9000'),
            name: person
        })
    }

    componentDidUpdate() {
        let socket = this.state.ws;

        if (!this.isInit) {
            this.isInit = true;

            socket.emit('setName', this.state.name);
            
            // Listen on message received event
            socket.on('messageReceived', message => {
                this.createMessage(message);
            })

            socket.on('setNameSucceed', () => {
                alert('set name succeed');
            })

            socket.on('setNameFailed', () => {
                alert('set name failed');
            })
        }
    }

    // Keep track of the current message
    handleTextBoxChange(text) {
        this.setState({
            current_message: text
        });
    }

    // Create Bot message
    createMessage(response) {
        const botMessage = {
            message: response,
            isbotmessage: true
        };
        this.setState( prevstate => ({
            messages: [...prevstate.messages, botMessage],
            current_message: ""
        }));
    }

    // Add current message to messages[] list
    handleTextBoxEnter() {
        const current_message = this.state.current_message;
        const newElement = {
            message: current_message,
            isbotmessage: false
        };
        
        this.setState( prevstate => ({
            messages: [...prevstate.messages, newElement],
            current_message: ""
        }));
        this.state.ws.emit('sendMessage', current_message);
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
