import React from 'react';
import c from './Chat.module.css'
import MessageIn from "./MessageIn/MessageIn";
import Input from "./Input/Input";
import MessageOut from "./MessageOut/MessageOut";
import JobStatusIcon from "../../common/JobStatusIcon/JobStatusIcon";


const Chat = (props) => {

    let messageInElement = props.messages.messagesIn.map(m => (<MessageIn idIn={m.idIn} textIn={m.textIn}/>))

    let messageOutElement = props.messages.messagesOut.map(m => (<MessageOut idOut={m.idOut} textOut={m.textOut}/>));

    return (
        <div className={c.chat}>

            <div className={c.messages_wrapper}>
                <div className={c.messagesIn_wrap}>
                    {messageInElement}
                </div>

                <div className={c.messagesOut_wrap}>
                    {messageOutElement}
                </div>
            </div>
            <Input newMessageValue={props.messages.newMessageValue} addMessage={props.addMessage}
                   newMessageText={props.newMessageText}/>
        </div>
    )

}

export default Chat;