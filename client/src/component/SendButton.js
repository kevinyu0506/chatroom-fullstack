import React, { Component } from 'react';

class SendButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClick();
    }

    render() {
        return (
            <div className="nes-btn is-primary"
                 onClick={this.handleClick}> 
                send
            </div>
        );
    }
}

export default SendButton;