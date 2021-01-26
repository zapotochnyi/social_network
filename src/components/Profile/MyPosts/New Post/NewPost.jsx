import React from 'react';
import c from './NewPost.module.css'

const NewPost = () => {
    return (
        <div>
            <h2 className={c.header}>
                My posts
            </h2>
            <div className={c.new_post}>
                    <textarea className={c.textarea} name="new_post" cols="140" rows="8"
                              placeholder={'what you thinking?'}></textarea>
                <br/>
                <button className={c.publish_btn}>Publish</button>
            </div>
        </div>
    )
}

export default NewPost