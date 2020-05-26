import React, { Component } from 'react';

class SendButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Send button clicked.");
        // this.addMessageBox();
    }

    render() {
        return (
            <div className="send_message"
                 onClick={this.handleClick}> 
                <div className="text">send</div>
            </div>
        );
    }
}

export default SendButton;