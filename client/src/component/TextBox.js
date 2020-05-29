import React, { Component } from 'react';

class TextBox extends Component{
    constructor(props) {
        super(props);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    }

    handleTextBoxChange(e) {
        this.props.onTextBoxChange(e.target.value);
    }

    _handleKeyPress(e) {
        if(e.key === "Enter"){
            this.props.onTextBoxEnter();
        }
    }

    render(){
        const current_message = this.props.current_message;
        return(
            <div className="message_input_wrapper">
                <input id="msg_input" 
                       className="nes-input" 
                       placeholder="Type your messages here..."
                       value={current_message} 
                       onChange={this.handleTextBoxChange}
                       onKeyDown={this._handleKeyPress} /> 
            </div>
        );
    }
}

export default TextBox;