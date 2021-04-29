import React from 'react';
import c from './SendMessageForm.module.css'
import {Field} from "redux-form";

const SendMessageForm = (props) => {
    return (
        <div className={c.input_wrap}>
            <form onSubmit={props.handleSubmit}>
                <Field className={c.message_form} component={'input'} name={'newMessageText'}
                       placeholder={'Enter your message...'}/>
                <button className={c.send_btn}>Send</button>
            </form>
        </div>
    )

}

export default SendMessageForm;