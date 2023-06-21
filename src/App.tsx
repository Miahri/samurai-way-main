import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

export function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}></Route>
                    <Route path='/dialogs' render={() => <DialogsContainer />}></Route>
                    <Route path='/users' render={() => <UsersContainer />}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

