import React from "react";
import s from "./Profile.module.css";
import MainImage from "./MainImage/MainImage";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";

const Profile = ({
  profileInfo,
  isOwner,
  status,
  updateUserStatus,
  profile,
  addPost,
  savePhoto,
  saveProfileInfo,
  isProfileInfoSuccess,
}) => {
  return (
    <div className={s.profile_wrapper}>
      <MainImage />
      <Description
        profileInfo={profileInfo}
        isOwner={isOwner}
        savePhoto={savePhoto}
        status={status}
        updateUserStatus={updateUserStatus}
        saveProfileInfo={saveProfileInfo}
        isProfileInfoSuccess={isProfileInfoSuccess}
      />
      <MyPosts profile={profile} addPost={addPost} />
    </div>
  );
};

export default Profile;
