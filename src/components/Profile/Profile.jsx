import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import MainImage from "./MainImage/MainImage";
import Description from "./Description/Description";
import c from './Profile.module.css'

const Profile = (props) => {

    return (
        <div className={c.profile_wrapper}>
            <MainImage/>
            <Description information={props.profile.information} avatars={props.profile.avatars}/>
            <MyPosts profile={props.profile} addPost={props.addPost}
                     newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;
