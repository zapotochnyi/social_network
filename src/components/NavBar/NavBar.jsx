import React from 'react';
import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import FriendsBar from "./FriendsBar/FriendsBar";

const NavBar = (props) => {


    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink activeClassName={c.active} to="/profile">Profile</NavLink>
            </div>

            <div className={c.item}>
                <NavLink activeClassName={c.active} to="/messages">Messages</NavLink>
            </div>

            <div className={c.item}>
                <NavLink activeClassName={c.active} to="/news">News</NavLink>
            </div>

            <div className={c.item}>
                <NavLink activeClassName={c.active} to="/music">Music</NavLink>
            </div>

            <div className={c.item}>
                <NavLink activeClassName={c.active} to="/settings">Settings</NavLink>
            </div>

            <FriendsBar friends={props.navBar.friends}/>

        </nav>
    )
}

export default NavBar;