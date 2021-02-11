import React from 'react';
import c from './Chat.module.css'
import MessageIn from "./MessageIn/MessageIn";
import Input from "./Input/Input";
import MessageOut from "./MessageOut/MessageOut";


const Chat = (props) => {

    let messageInElement = props.messagesIn.map(m => (<MessageIn idIn={m.idIn} textIn={m.textIn}/>))

    let messageOutElement = props.messagesOut.map(m => (<MessageOut idOut={m.idOut} textOut={m.textOut}/>));

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
            <Input newMessageValue={props.newMessageValue} sendMessage={props.sendMessage}
                   updateNewMessageValue={props.updateNewMessageValue}/>
        </div>
    )

}

export default Chat;