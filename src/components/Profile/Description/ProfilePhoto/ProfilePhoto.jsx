import React from "react";
import DefaultPhoto from "../../../../assets/images/default-user-image.png";
import s from "./ProfilePhoto.module.css";

const ProfilePhoto = ({ large, isOwner, savePhoto }) => {
  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.photo_wrap}>
        <img src={large || DefaultPhoto} alt="profile" />
      </div>

      <div className={s.input_wrap}>
        {isOwner && <input type="file" onChange={onPhotoSelected} />}
      </div>
    </div>
  );
};

export default ProfilePhoto;
