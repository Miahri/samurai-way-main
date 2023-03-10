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
    dispatch: (action: any) => void
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}></Route>
                    <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                                  dispatch={props.dispatch}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

