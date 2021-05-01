import React from 'react';
import c from './NewPostForm.module.css'
import {Field} from "redux-form";
import {Textarea} from "../../../../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";

const maxLength200 = maxLengthCreator(200);

const NewPostForm = (props) => {
    return (
        <div className={c.new_post}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'newPostText'} validate={[required, maxLength200]}/>
                </div>
                <div>
                    <button className={'c.publish_btn'}>Publish</button>
                </div>
            </form>
        </div>
    )
}

export default NewPostForm;