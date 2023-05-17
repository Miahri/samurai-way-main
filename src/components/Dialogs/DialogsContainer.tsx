import React from 'react';
import {sendMessageActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().dialogPage;

                    const sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                        store.dispatch(updateNewMsgTextActionCreator(''));
                    }

                    const updateNewMsgText = (text: string) => {
                        store.dispatch(updateNewMsgTextActionCreator(text));
                    }

                    return (
                        <Dialogs newMessageText={state.newMessageText}
                                 dialogs={state.dialogs}
                                 messages={state.messages}
                                 sendMessage={sendMessage}
                                 updateNewMsgText={updateNewMsgText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}