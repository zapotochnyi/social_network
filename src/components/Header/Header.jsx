import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/Logo.png'
import {NavLink} from "react-router-dom";
import defaultUserPhoto from '../../assets/images/default-user-image.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>

            <div className={s.login_block}>
                {props.isAuth ?

                    <div className={s.user_name}>
                        <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink>
                        <img src={props.photo != null ? props.photo : defaultUserPhoto} alt="user" />
                        <span onClick={props.logout}>Logout</span>
                    </div> :

                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;

