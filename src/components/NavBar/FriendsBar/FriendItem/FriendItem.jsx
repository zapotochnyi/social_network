import React from 'react';
import c from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={c.friend_item}>
            <img src={props.avatar} alt="avatar"/>
            <h5>{props.name}</h5>
        </div>
    )
}

export default FriendItem;