import React from "react";
import s from "./UsersPage.module.css";
import { NavLink } from "react-router-dom";
import defaultUserImg from "../../../assets/images/default-user-image.png";
import Paginator from "../../common/Paginator/Paginator";

const UsersPage = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
  unfollowUser,
  followUser,
  buttonDisableInProgress,
  users,
  ...props
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  //todo pages slice with real total count
  return (
    <div className={s.users_wrapper}>
      <Paginator
        pages={pages}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />

      {users.map((u) => (
        <div className={s.wrapper}>
          <div className={s.avatar_wrap}>
            <NavLink to={"/profile/" + u.id}>
              <img
                src={u.photos.small != null ? u.photos.small : defaultUserImg}
              />
            </NavLink>

            {u.followed ? (
              <button
                disabled={buttonDisableInProgress.some(
                  (id) => id === u.id
                )}
                onClick={() => {
                  unfollowUser(u.id);
                }}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                disabled={buttonDisableInProgress.some(
                  (id) => id === u.id
                )}
                onClick={() => {
                  followUser(u.id);
                }}
              >
                FOLLOW
              </button>
            )}
          </div>

          <div className={s.info_wrap}>
            <div className={s.name_status}>
              <NavLink className={s.name} to={"/profile/" + u.id}>
                <h3>{u.name}</h3>
              </NavLink>

              <span>{u.status != null ? u.status : "i am a boss"}</span>
            </div>

            <div className={s.location}>
              <span>{"props.location.country"},</span>
              <span>{"props.location.city"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
