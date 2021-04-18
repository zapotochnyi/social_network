import React from 'react';
import c from './MessageIn.module.css'

const MessageIn = (props) => {
    return (
            <div className={c.message_in}>{props.textIn}</div>
    )

}

export default MessageIn;