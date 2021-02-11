import React from 'react';
import c from './Messages.module.css';
import Dialogs from "./Dialogs/Dialogs";
import Chat from "./Chat/Chat";

const Messages = (props) => {

    return (
        <div className={c.messages_wrap}>
            <Dialogs dialogs={props.messagesPage.dialogs}/>
            <Chat messagesIn={props.messagesPage.messagesIn} newMessageValue={props.messagesPage.newMessageValue}
                  messagesOut={props.messagesPage.messagesOut} sendMessage={props.sendMessage} updateNewMessageValue={props.updateNewMessageValue}/>
        </div>
    )

}

export default Messages;