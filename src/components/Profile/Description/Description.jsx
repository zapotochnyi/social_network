import React from "react";
import s from "./Description.module.css";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Information from "./Information/Information";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Description = ({
  profileInfo: {
    fullName,
    photos,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts: { facebook, vk, twitter, instagram, github },
  },
  isOwner,
  savePhoto,
  status,
  updateUserStatus,
}) => {
  return (
    <div className={s.description}>
      <ProfilePhoto large={photos.large} isOwner={isOwner} savePhoto={savePhoto} />

      <div className={s.name_status}>
        <h2>{fullName}</h2>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
      </div>

      <Information
        aboutMe={aboutMe}
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
        facebook={facebook}
        vk={vk}
        twitter={twitter}
        instagram={instagram}
        github={github}
      />
    </div>
  );
};

export default Description;
