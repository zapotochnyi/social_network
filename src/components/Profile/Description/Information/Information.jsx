import React from "react";
import ContactLink from "./ContactLink";
import s from "./Information.module.css";

const Information = ({
  fullName,
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
  isOwner,
  goToEditMode,
}) => {
  return (
    <div className={s.information}>
      <div className={s.name}>
        <h2>{fullName}</h2>
      </div>

      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}

      {aboutMe && (
        <div className={s.item}>
          <b>About me:</b> {aboutMe}
        </div>
      )}

      <div className={s.item}>
        <b>Looking for a job:</b> {lookingForAJob ? "yes" : "no"}
      </div>

      {lookingForAJob && (
        <div className={s.item}>
          <b>Professional skills:</b> {lookingForAJobDescription}
        </div>
      )}

      <div className={s.item}>
        <b>Contacts: </b>
        {Object.keys(contacts).map((key) => {
          return <ContactLink key={key} link={contacts[key]} title={key} />;
        })}
      </div>
    </div>
  );
};

export default Information;
