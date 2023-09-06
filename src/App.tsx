import React, {Component} from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {compose} from "redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {connect} from "react-redux";

type AppPropsType = {
  getAuthUserData: () => void
}

class App extends Component<AppPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }

  render() {
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

export default compose(
  withRouter,
  connect(null, {getAuthUserData})
)(App);

