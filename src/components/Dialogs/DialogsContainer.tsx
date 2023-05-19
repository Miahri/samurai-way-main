import React from 'react';
import {
    DialogPageType,
    sendMessageActionCreator,
    updateNewMsgTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type DialogsMapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMsgText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): DialogPageType => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
            dispatch(updateNewMsgTextActionCreator(''));
        },
        updateNewMsgText: (text: string) => {
            dispatch(updateNewMsgTextActionCreator(text));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);