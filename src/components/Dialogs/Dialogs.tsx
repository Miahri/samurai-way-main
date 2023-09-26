import React from 'react';
import dialogsModule from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../redux/state";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {createField, Textarea} from "../../common/FormsControls/FormsControls";

type DialogsPropsType = {
  newMessageText: string
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  isAuth: boolean
  sendMessage: (values: any) => void
};

type FormDataType = {
  newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);

export const Dialogs = (props: DialogsPropsType) => {
  let dialogItems = props.dialogs.map((d: DialogsType) => <DialogItem id={d.id} name={d.name}/>);
  let messageItems = props.messages.map((m: MessagesType) => <Message message={m.message}/>);

  const sendMessage = (values: FormDataType) => {
    props.sendMessage(values.newMessageBody)
  };

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

const AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {createField([required, maxLength50], "Enter your message", "newMessageBody", Textarea)}
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'DialogAddMessageForm'})(AddMessageForm);