import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

export function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appContent'>
                    <Route path='/profile' render={() => <Profile store={props.store} />}></Route>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

