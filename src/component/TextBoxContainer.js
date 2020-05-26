import React, { Component } from 'react';
import TextBox from './TextBox.js';
import SendButton from './SendButton.js';

class TextBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        this.handleSendButtonClick = this.handleSendButtonClick.bind(this);
        this.state = {
            current_message: ""
        }
    }

    handleTextBoxChange(text) {
        this.setState({
            current_message: text
        });
    }

    handleSendButtonClick() {
        console.log("Send button clicked.")
        console.log(`Current message: ${this.state.current_message}`)
    }

    render() {
        const current_message = this.state.current_message;
        return (
            <div className="bottom_wrapper clearfix">
                <TextBox 
                    current_message={current_message}
                    onTextBoxChange={this.handleTextBoxChange}/>
                <SendButton
                    current_message={current_message}
                    onButtonClick={this.handleSendButtonClick}/>
            </div>
        );
    }
}

export default TextBoxContainer;