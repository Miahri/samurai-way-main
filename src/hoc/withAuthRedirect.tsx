import {Redirect} from "react-router-dom";
import React, {Component} from "react";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
  isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType) => {
  return {
    isAuth: state.authPage.isAuth
  }
};

export const withAuthRedirect = (Component: any) => {
  class RedirectComponent extends React.Component<MapStateToPropsType> {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={'/login'}/>
      }

      return (<Component {...this.props} />)
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}