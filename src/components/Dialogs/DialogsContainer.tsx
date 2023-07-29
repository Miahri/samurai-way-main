import React from 'react';
import {
    sendMessageActionCreator,
    updateNewMsgTextActionCreator
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {Redirect} from "react-router-dom";

type DialogsMapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMsgText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        isAuth: state.authPage.isAuth
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

/*export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/

//let AuthRedirectComponent = withAuthRedirect(Dialogs);

let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={"/login"} />
    return <Dialogs {...props} />
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);