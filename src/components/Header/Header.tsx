import React from 'react';
import headerModule from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
};

export function Header(props: HeaderPropsType) {
  return (
    <header className={headerModule.appHeader}>
      <img src="https://img.freepik.com/free-vector/hand-drawn-japanese-illustration-of-japanese-fan-with-flowers-and-koi-fish_23-2149601814.jpg?size=338&ext=jpg&ga=GA1.1.671649503.1673040739
                ava + description"/>

      <div className={headerModule.authLink}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}
