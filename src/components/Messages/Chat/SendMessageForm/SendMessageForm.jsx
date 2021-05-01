import React from 'react';
import c from './SendMessageForm.module.css'
import {Field} from "redux-form";
import {Textarea} from "../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength200 = maxLengthCreator(200);

const SendMessageForm = (props) => {
    return (
        <div className={c.input_wrap}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newMessageText'}
                           placeholder={'Enter your message...'} validate={[required, maxLength200]}/>
                </div>
                <div>
                    <button className={'c.send_btn'}>Send</button>
                </div>
            </form>
        </div>
    )

}

export default SendMessageForm;