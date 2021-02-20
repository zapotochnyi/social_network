import React from 'react';
import c from './Input.module.css'


const Input = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let action = {type: 'SEND-MESSAGE'};
        props.dispatch(action);
    }

    let newMessageText = () => {
        let text = newMessage.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-VALUE', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={c.input_wrap}>
            <input onChange={newMessageText} value={props.newMessageValue} ref={newMessage} type="text"
                   placeholder="Enter your message"/>
            <div onClick={addMessage} className={c.send_btn}>Send</div>
        </div>
    )

}

export default Input;