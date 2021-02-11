import React from 'react';
import c from './Input.module.css'


const Input = (props) => {
    let newMessage = React.createRef();

    let newMessageText = () => {
        debugger;
        let text = newMessage.current.value;
        // props.updateNewMessageValue(text);
        props.dispatch({ type: 'UPDATE-NEW-MESSAGE-VALUE', newText: text });
    }

    return (
        <div className={c.input_wrap}>
            <input onChange={newMessageText} value={props.newMessageValue} ref={newMessage} type="text" placeholder="Enter your message"/>
            <div onClick={props.dispatch( {type: 'SEND-MESSAGE'} )} className={c.send_btn} >Send</div>
        </div>
    )

}

export default Input;