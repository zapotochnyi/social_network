import React from 'react';
import c from './Header.module.css';

const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" alt="logo"/>
        </header>
    )
}

export default Header;

