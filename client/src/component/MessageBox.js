import React, { Component } from 'react';
import Avatar from './Avatar.js';

class MessageBox extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render(){
        // const index = this.props.key;
        const appearance = this.props.appearance;
        const message = this.props.message;

        return(
            <div className={`message -${appearance}`}>
                {/* <Avatar></Avatar> */}
                {/* <i class="nes-bcrikko"></i> */}
                <div className={`nes-balloon from-${appearance}`}>
                    <p>{message}</p>
                </div>
            </div>
      );
    }
}

export default MessageBox;