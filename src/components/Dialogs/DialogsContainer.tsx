import React from 'react';
import {sendMessageActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/state";

const mapStateToProps = (state: StateType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages
    }
}

const mapDispatchToProps = (dispatch: any) => {
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