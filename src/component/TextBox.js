import React, { Component } from 'react';

class TextBox extends Component{
    constructor(props) {
        super(props);
        // this.addMessageBox = this.addMessageBox.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);
        this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    }

    handleTextBoxChange(e) {
        this.props.onTextBoxChange(e.target.value);
    }

    // We need to add a new message to MessagesContainer component
    _handleKeyPress(e) {
        if(e.key === "Enter"){
            console.log("Enter key pressed.");
            console.log(`Current message: ${this.props.current_message}`)
        }
        // this.addMessageBox(enter_pressed)
    }

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

    render(){
        const current_message = this.props.current_message;
        return(
            <div className="message_input_wrapper">
                <input id="msg_input" 
                       className="message_input" 
                       placeholder="Type your messages here..."
                       value={current_message} 
                       onChange={this.handleTextBoxChange}
                       onKeyDown={this._handleKeyPress} /> 
            </div>
        );
    }
}

export default TextBox;