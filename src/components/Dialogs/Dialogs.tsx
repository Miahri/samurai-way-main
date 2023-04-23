import React, {ChangeEvent} from 'react';
import dialogsModule from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    DialogPageType
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMsgTextActionCreator} from "../../redux/dialogs-reducer";

type DialogPropsType = {
    dialogPage: DialogPageType
    dispatch: (action: any) => void
}

export const Dialogs = (props: DialogPropsType) => {
    let dialogItems = props.dialogPage.dialogs.map((d: any) => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.dialogPage.messages.map((m: any) => <Message message={m.message}/>)

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
        props.dispatch(updateNewMsgTextActionCreator(''));
    }

    const updateNewMsgText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.dispatch(updateNewMsgTextActionCreator(e.currentTarget.value));
        }
    }

    return (
        <div className={dialogsModule.dialogsWrapper}>
            <div className={dialogsModule.dialogs}>
                {dialogItems}
            </div>
            <div className={dialogsModule.messages}>
                {messageItems}
                <div>
                    <textarea value={props.dialogPage.newMessageText} onChange={updateNewMsgText}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}