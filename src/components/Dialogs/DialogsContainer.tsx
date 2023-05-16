import React from 'react';
import {StoreType} from "../../redux/state";
import {sendMessageActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogPropsType) => {
    const state = props.store.getState().dialogPage;

    const sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
        props.store.dispatch(updateNewMsgTextActionCreator(''));
    }

    const updateNewMsgText = (text: string) => {
        props.store.dispatch(updateNewMsgTextActionCreator(text));
    }

    return (
        <Dialogs newMessageText={state.newMessageText}
                 dialogs={state.dialogs}
                 messages={state.messages}
                 sendMessage={sendMessage}
                 updateNewMsgText={updateNewMsgText}/>
    )
}