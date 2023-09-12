import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";

type DialogsMapDispatchToPropsType = {
  sendMessage: (newMessageBody: string) => void
};

const mapStateToProps = (state: AppRootStateType) => {
  return {
    dialogs: state.dialogPage.dialogs,
    messages: state.dialogPage.messages,
    isAuth: state.authPage.isAuth
  }
};

const mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchToPropsType => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    }
  }
};

/*export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/


//need to delete
//let AuthRedirectComponent = withAuthRedirect(Dialogs);

let AuthRedirectComponent = (props: any) => {
  if (!props.isAuth) return <Redirect to={"/login"}/>
  return <Dialogs {...props} />
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);