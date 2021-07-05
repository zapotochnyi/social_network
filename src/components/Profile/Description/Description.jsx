import React, { useState } from "react";
import s from "./Description.module.css";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Information from "./Information/Information";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import InformationFormReduxForm from "./Information/InformationForm";

const Description = ({
  profileInfo: {
    fullName,
    photos: { large, small },
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  },
  isOwner,
  savePhoto,
  status,
  updateUserStatus,
  saveProfileInfo,
  isProfileInfoSuccess,
}) => {
  let [editMode, setEditMode] = useState(false);

  let initialProfileInfo = {
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
  };

  const onSubmit = (formData) => {
    saveProfileInfo(formData);
    if (isProfileInfoSuccess) {
      setEditMode(false);
    };
  };

  return (
    <div className={s.description}>
      <div className={s.photo_status}>
        <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
        <ProfilePhoto large={large} isOwner={isOwner} savePhoto={savePhoto} />
      </div>

      <div className={s.name_info_wrap}>
        {editMode ? (
          <InformationFormReduxForm
            initialValues={initialProfileInfo}
            onSubmit={onSubmit}
            contacts={contacts}
          />
        ) : (
          <Information
            goToEditMode={() => {
              setEditMode(true);
            }}
            isOwner={isOwner}
            fullName={fullName}
            aboutMe={aboutMe}
            lookingForAJob={lookingForAJob}
            lookingForAJobDescription={lookingForAJobDescription}
            contacts={contacts}
          />
        )}
      </div>
    </div>
  );
};

export default Description;
