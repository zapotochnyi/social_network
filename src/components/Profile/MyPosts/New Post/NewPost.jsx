import React from 'react';
import c from './NewPost.module.css'
import NewPostForm from "./NewPostForm/NewPostForm";
import {reduxForm} from "redux-form";

const NewPostReduxForm = reduxForm({form:'newPost'})(NewPostForm);

const NewPost = (props) => {

    let onAddPost = (formData) => {
        props.addPost(formData.newPostText);
        formData.newPostText = '';
    }

    return (
        <div>
            <h2 className={c.header}>
                My posts
            </h2>
            <NewPostReduxForm onSubmit={onAddPost}/>
        </div>
    )
}

export default NewPost