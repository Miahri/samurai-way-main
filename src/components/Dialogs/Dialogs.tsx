import React, {ChangeEvent} from 'react';
import dialogsModule from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";
import {Redirect} from "react-router-dom";

type DialogPropsType = {
    newMessageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    isAuth: boolean
    sendMessage: () => void
    updateNewMsgText: (text: string) => void
}

export const Dialogs = (props: DialogPropsType) => {
    let dialogItems = props.dialogs.map((d: DialogsType) => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.messages.map((m: MessagesType) => <Message message={m.message}/>)

    const sendMessage = () => {
        props.sendMessage()
    }

    const updateNewMsgText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.updateNewMsgText(e.currentTarget.value);
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
                    <textarea value={props.newMessageText} onChange={updateNewMsgText}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    )
}