import React, { Component } from 'react';
import TextBox from './TextBox.js';
import SendButton from './SendButton.js';

class TextBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
        this.handleTextBoxEnter = this.handleTextBoxEnter.bind(this);
    }

    // Notify current message changed
    handleTextBoxChange(text) {
        this.props.onTextBoxChange(text);
    }

    // Notify message sent
    handleTextBoxEnter() {
        // console.log(`Current message: ${this.props.current_message}`)
        this.props.onTextBoxEnter();
    }

    render() {
        const current_message = this.props.current_message;
        return (
            <div className="nes-field is-inline">
                <TextBox 
                    current_message={current_message}
                    onTextBoxChange={this.handleTextBoxChange}
                    onTextBoxEnter={this.handleTextBoxEnter}/>
                <SendButton
                    current_message={current_message}
                    onButtonClick={this.handleTextBoxEnter}/>
            </div>
        );
    }
}

export default TextBoxContainer;