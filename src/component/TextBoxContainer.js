import React, { Component } from 'react';
import TextBox from './TextBox.js';
import SendButton from './SendButton.js';

class TextBoxContainer extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        // const current_message = this.state.current_message;

        return (
            <div className="bottom_wrapper clearfix">
                <TextBox/>
                <SendButton/>
            </div>
        );
    }
}

export default TextBoxContainer;