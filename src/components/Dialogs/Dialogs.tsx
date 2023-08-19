import React from 'react';
import dialogsModule from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";
import {Field, reduxForm} from "redux-form";

type DialogPropsType = {
    newMessageText: string
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    isAuth: boolean
    sendMessage: (values: any) => void
}

export const Dialogs = (props: DialogPropsType) => {
    let dialogItems = props.dialogs.map((d: DialogsType) => <DialogItem id={d.id} name={d.name}/>)
    let messageItems = props.messages.map((m: MessagesType) => <Message message={m.message}/>)

    const sendMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={dialogsModule.dialogsWrapper}>
            <div className={dialogsModule.dialogs}>
                {dialogItems}
            </div>
            <div className={dialogsModule.messages}>
                {messageItems}
            </div>
            <AddMessageFormRedux onSubmit={sendMessage}/>
        </div>
    )
};

const AddMessageForm = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
          </div>
          <div>
              <button>Send message</button>
          </div>
      </form>

    )
};

const AddMessageFormRedux = reduxForm({form: 'DialogAddMessageForm'})(AddMessageForm);