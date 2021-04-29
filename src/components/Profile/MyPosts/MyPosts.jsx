import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./New Post/NewPost";

const MyPosts = (props) => {
    let postElement = props.profile.posts.map(p => (
        <Post avatar={p.avatar} name={p.name} text={p.text} quantity_likes={p.quantity_likes} quantity_reposts={p.quantity_reposts}/>))

    return (
        <div className={c.posts}>
            <NewPost addPost={props.addPost}/>
            {postElement}
        </div>
    )
}

export default MyPosts;

