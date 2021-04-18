import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/Logo.png'
import {NavLink} from "react-router-dom";
import defaultUserPhoto from '../../assets/images/default-user-image.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo}/>

            <div className={s.login_block}>
                {props.isAuth ?
                    <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink> :
                    <NavLink to={'/login'}>Login</NavLink>}

                {props.isAuth ?
                    <img src={props.photo != null ? props.photo : defaultUserPhoto}/> : null}

            </div>
        </header>
    )
}

export default Header;

