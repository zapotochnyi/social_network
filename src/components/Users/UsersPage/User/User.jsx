import React from "react";
import { NavLink } from "react-router-dom";
import s from "./User.module.css";
import defaultUserImg from "../../../../assets/images/default-user-image.png";

const User = ({user, buttonDisableInProgress, unfollowUser, followUser}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar_wrap}>
        <NavLink to={"/profile/" + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : defaultUserImg}
            alt="small-avatar"
          />
        </NavLink>

        {user.followed ? (
          <button
            disabled={buttonDisableInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollowUser(user.id);
            }}
          >
            UNFOLLOW
          </button>
        ) : (
          <button
            disabled={buttonDisableInProgress.some((id) => id === user.id)}
            onClick={() => {
              followUser(user.id);
            }}
          >
            FOLLOW
          </button>
        )}
      </div>

      <div className={s.info_wrap}>
        <div className={s.name_status}>
          <NavLink className={s.name} to={"/profile/" + user.id}>
            <h3>{user.name}</h3>
          </NavLink>

          <span>{user.status != null ? user.status : "i am a boss"}</span>
        </div>

        <div className={s.location}>
          <span>{"props.location.country"},</span>
          <span>{"props.location.city"}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
