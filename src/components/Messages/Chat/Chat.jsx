import React from 'react';
import c from './Chat.module.css'
import MessageIn from "./MessageIn/MessageIn";
import MessageOut from "./MessageOut/MessageOut";
import {reduxForm} from "redux-form";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

let SendMessageReduxForm = reduxForm({form: 'sendMessageForm'})(SendMessageForm)

const Chat = (props) => {

    let messageInElement = props.messages.messagesIn.map(m => (<MessageIn idIn={m.idIn} textIn={m.textIn}/>))

    let messageOutElement = props.messages.messagesOut.map(m => (<MessageOut idOut={m.idOut} textOut={m.textOut}/>));

    let onSubmit = (formData) => {
        props.addMessage(formData.newMessageText);
    }

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
            <SendMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )

}

export default Chat;