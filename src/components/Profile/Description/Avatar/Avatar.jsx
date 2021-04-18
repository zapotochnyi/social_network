import React from 'react';
import c from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={c.avatar}>
            <img src={props.src} />
        </div>
    )
}

export default Avatar;