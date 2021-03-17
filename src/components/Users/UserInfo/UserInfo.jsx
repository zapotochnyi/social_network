import React from 'react';
import s from './UserInfo.module.css'

const UserInfo = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar_wrap}>
                <img src={props.avatar}/>
                {props.followed ? <button onClick={ () => {props.unfollowUser(props.id)}} >FOLLOW</button> :
                    <button onClick={ () => {props.followUser(props.id)}}>UNFOLLOW</button>}

            </div>

            <div className={s.info_wrap}>
                <div className={s.name_status}>
                    <h3>{props.name}</h3>
                    <span>{props.status}</span>
                </div>

                <div className={s.location}>
                    <span>{props.location.country},</span>
                    <span>{props.location.city}</span>
                </div>
            </div>

        </div>
    )
}

export default UserInfo;