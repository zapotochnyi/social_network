import React from 'react';
import c from './MessageOut.module.css';

const MessageOut = (props) => {
    return (
        <div className={c.message_out}>{props.textOut}</div>
    )
}

export default MessageOut;