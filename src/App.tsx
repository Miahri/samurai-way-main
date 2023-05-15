import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType, StoreType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: any) => void
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
                    <Route path='/dialogs' render={() => <Dialogs dialogPage={props.state.dialogPage}
                                                                  dispatch={props.dispatch}/>}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

