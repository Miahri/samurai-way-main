import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);