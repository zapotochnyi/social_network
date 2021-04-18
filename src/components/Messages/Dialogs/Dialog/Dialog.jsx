import React from 'react';
import {NavLink} from "react-router-dom";
import c from './Dialogs.module.css';

const Dialog = (props) => {
    const path = '/messages/' + props.id;
    return (
        <div className={c.dialog_wrap}>
            <img className={c.avatar} src={props.avatar}/>
            <NavLink to={path} activeClassName={c.active_dialog} className={c.dialog}>{props.name}</NavLink>
        </div>
    )

}

export default Dialog;