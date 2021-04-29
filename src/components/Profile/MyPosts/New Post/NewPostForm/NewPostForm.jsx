import React from 'react';
import c from './NewPostForm.module.css'
import {Field} from "redux-form";

const NewPostForm = (props) => {
    return (
        <div className={c.new_post}>
            <form onSubmit={props.handleSubmit}>
                <Field className={c.textarea} component={'input'} type={'textarea'} name={'newPostText'}/>
                <br/>
                <button className={c.publish_btn}>Publish</button>
            </form>
        </div>
    )
}

export default NewPostForm;