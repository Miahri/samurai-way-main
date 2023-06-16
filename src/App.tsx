import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export function App() {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
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

