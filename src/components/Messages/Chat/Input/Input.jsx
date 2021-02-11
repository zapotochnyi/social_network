import React from 'react';
import c from './Input.module.css'


const Input = (props) => {

    let newMessage = React.createRef();

    let newMessageText = () => {
        let text = newMessage.current.value;
        props.updateNewMessageValue(text);
    }

    return (
        <div className={c.input_wrap}>
            <input onChange={newMessageText} value={props.newMessageValue} ref={newMessage} type="text" placeholder="Enter your message"/>
            <div onClick={props.sendMessage} className={c.send_btn} >Send</div>
        </div>
    )

}

export default Input;