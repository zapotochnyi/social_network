import React from 'react';
import c from './Input.module.css'
import {addMessageActionCreator, newMessageTextActionCreator} from "../../../../redux/messagesReducer";

const Input = (props) => {
    let newMessage = React.createRef();

    let OnAddMessage = () => {
        props.addMessage();
    }

    let OnNewMessageText = () => {
        let text = newMessage.current.value;
        props.newMessageText(text);
    }

    return (
        <div className={c.input_wrap}>
            <input onChange={OnNewMessageText} value={props.newMessageValue} ref={newMessage} type="text"
                   placeholder="Enter your message"/>
            <div onClick={OnAddMessage} className={c.send_btn}>Send</div>
        </div>
    )

}

export default Input;