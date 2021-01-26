import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MainImage from "./MainImage/MainImage";
import Description from "./Description/Description";

const Profile = () => {
    return (
        <div className={c.profile}>
            <MainImage/>
            <Description/>
            <MyPosts/>
        </div>
    )
}

export default Profile;