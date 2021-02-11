import React from 'react';
import c from './NewPost.module.css'

const NewPost = (props) => {

    let newPost = React.createRef();

    let newPostText = () => {
        let text = newPost.current.value;
        props.updateNewPostValue(text);
    }

    return (
        <div>
            <h2 className={c.header}>
                My posts
            </h2>
            <div className={c.new_post}>
                    <textarea onChange={newPostText} value={props.newPostValue} ref={newPost} className={c.textarea} name="new_post" cols="140" rows="8"
                              placeholder={'what you thinking?'} />
                <br/>
                <div onClick={props.addPost} className={c.publish_btn}>Publish</div>
            </div>
        </div>
    )
}

export default NewPost