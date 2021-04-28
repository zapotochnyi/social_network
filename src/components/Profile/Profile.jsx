import React from 'react';
import s from "./Profile.module.css";
import MainImage from "./MainImage/MainImage";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={s.profile_wrapper}>
            <MainImage/>
            <Description profileInfo={props.profileInfo} status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPosts profile={props.profile} addPost={props.addPost}
                     newPostText={props.newPostText}/>
        </div>
    )
}

export default Profile;