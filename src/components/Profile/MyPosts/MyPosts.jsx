import React from 'react';
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import NewPost from "./New Post/NewPost";

const MyPosts = () => {
    return (
        <div className={c.posts}>
            <NewPost/>
            <Post text='Пока не узнаю, сколько %, спать не пойду. Волнуюсь же' quantity_likes='108' quantity_reposts='25'/>
            <Post text='С юбилеем Великой Победы вас! Не забудьте, в 22.00 праздничный салют' quantity_likes='584' quantity_reposts='56'/>
            <Post text='Порошенко напоминает мне картошку: либо осенью уберут, либо зимой замёрзнет'quantity_likes='497' quantity_reposts='14'/>
        </div>
    )
}

export default MyPosts;