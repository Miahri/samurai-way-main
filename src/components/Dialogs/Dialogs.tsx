import React from 'react';
import dialogsModule from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogPropsType = {
    dialogPage: DialogPageType
}

export const Dialogs = (props: DialogPropsType) => {
    let dialogItems = props.dialogPage.dialogs.map((d: any) => <DialogItem id={d.id} name={d.name} />)
    let messageItems = props.dialogPage.messages.map((m: any) => <Message message={m.message} />)

    return (
        <div className={dialogsModule.dialogsWrapper}>
            <div className={dialogsModule.dialogs}>
                {dialogItems}
            </div>
            <div className={dialogsModule.messages}>
                {messageItems}
            </div>
        </div>
    )
}