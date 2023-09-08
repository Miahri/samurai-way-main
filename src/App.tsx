import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./common/Preloader/Preloader";
import {AppRootStateType} from "./redux/redux-store";

type AppPropsType = {
  initializeApp: () => void
  initialized: boolean
}

type MapStateToPropsType = {
  initialized: boolean
}

class App extends Component<AppPropsType> {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized){
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='appWrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='appContent'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}></Route>
            <Route path='/dialogs' render={() => <DialogsContainer/>}></Route>
            <Route path='/users' render={() => <UsersContainer/>}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

