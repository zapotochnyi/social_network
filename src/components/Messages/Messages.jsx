import React from 'react';
import c from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";

const Messages = (props) => {

    return (
        <div className={c.messages_wrap}>
            <Dialogs dialogs={props.messages.dialogs}/>
            <Chat messages={props.messages} addMessage={props.addMessage} newMessageText={props.newMessageText}/>
        </div>
    )

}

export default Messages;