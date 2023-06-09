import React from 'react';
import navModule from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={navModule.appNav}>
            <div className={navModule.item}>
                <NavLink to={'/profile'} activeClassName={navModule.activeLink}>Profile</NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink to={'/dialogs'} activeClassName={navModule.activeLink}>Messages</NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink to={'/news'} activeClassName={navModule.activeLink}>News</NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink to={'/music'} activeClassName={navModule.activeLink}>Music</NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink to={'/settings'} activeClassName={navModule.activeLink}>Settings</NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink to={'/users'} activeClassName={navModule.activeLink}>Users</NavLink>
            </div>
        </nav>
    );
}

