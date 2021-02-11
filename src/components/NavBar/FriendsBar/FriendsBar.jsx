import React from 'react';
import c from './FriendsBar.module.css'
import {NavLink} from "react-router-dom";
import FriendItem from "./FriendItem/FriendItem";

const FriendsBar = (props) => {

    let friendItemElement = props.friends.map(f => (<FriendItem avatar={f.avatar} name={f.name}/>));

    return (
        <div className={c.friends_bar}>
            <div className={c.friends_link}>
                <NavLink activeClassName={c.active} to="/friends">Friends</NavLink>
            </div>
            <div className={c.friends_wrapper}>
                {friendItemElement}
            </div>

        </div>
    )
}

export default FriendsBar;