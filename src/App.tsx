import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (message: string) => void
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header />
                <Navbar />
                <div className='appContent'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}></Route>
                    <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

