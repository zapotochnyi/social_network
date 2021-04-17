import React from 'react';
import s from './UsersPage.module.css'
import {NavLink} from "react-router-dom";
import defaultUserImg from '../../../assets/images/default-user-image.png'
import {usersAPI} from "../../../api/api";

const UsersPage = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }
//todo pages slice with real total count
    return (
        <div className={s.users_wrapper}>
            <div className={s.pagination_wrap}>
                {pages.slice(0, 20).map(p => {
                        return <span onClick={(e) => {
                            props.onPageChanged(p)
                        }} className={props.currentPage === p && s.selected_page}>{p}</span>
                    }
                )}

            </div>

            {props.users.map(u => <div className={s.wrapper}>
                <div className={s.avatar_wrap}>

                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : defaultUserImg}/>
                    </NavLink>

                    {u.followed ?

                        <button disabled={props.buttonDisableInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowUser(u.id);
                        }}>UNFOLLOW</button> :

                        <button disabled={props.buttonDisableInProgress.some(id => id === u.id)} onClick={() => {
                            props.followUser(u.id);
                        }}>FOLLOW</button>}

                </div>

                <div className={s.info_wrap}>
                    <div className={s.name_status}>

                        <NavLink className={s.name} to={'/profile/' + u.id}>
                            <h3>{u.name}</h3>
                        </NavLink>

                        <span>{u.status != null ? u.status : 'i am a boss'}</span>
                    </div>

                    <div className={s.location}>
                        <span>{"props.location.country"},</span>
                        <span>{"props.location.city"}</span>
                    </div>
                </div>

            </div>)}

        </div>
    )
}

export default UsersPage;