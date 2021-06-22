import React, { useEffect, useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatus = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div className={s.status_wrapper}>
        {!editMode ? (
          <span onClick={activateEditMode}>
            {props.status || "there will be status"}
          </span>
        ) : (
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        )}
      </div>
    </>
  );
};

export default ProfileStatus;
