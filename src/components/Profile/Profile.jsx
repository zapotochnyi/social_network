import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import MainImage from "./MainImage/MainImage";
import Description from "./Description/Description";
import c from './Profile.module.css'

const Profile = (props) => {

    return (
        <div className={c.profile_wrapper}>
            <MainImage/>
            <Description information={props.profilePage.information} avatars={props.profilePage.avatars}/>
            <MyPosts posts={props.profilePage.posts} newPostValue={props.profilePage.newPostValue} addPost={props.addPost} updateNewPostValue={props.updateNewPostValue} />
        </div>
    )
}

export default Profile;