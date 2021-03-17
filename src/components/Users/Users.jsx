import React from 'react';
import s from './Users.module.css'
import UserInfo from "./UserInfo/UserInfo";
import axios from "axios";

const Users = (props) => {
    //todo rest API

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });
    }

    let userInfoElement = props.users.map(u => <UserInfo followUser={props.followUser} unfollowUser={props.unfollowUser}
                                                         key={u.id} id={u.id} followed={u.followed}
                                                         avatar={u.avatar}
                                                         name={u.name} status={u.status} location={u.location}/>);

    return (
        <div className={s.users_wrapper}>
            {userInfoElement}
        </div>
    )
}

export default Users;


