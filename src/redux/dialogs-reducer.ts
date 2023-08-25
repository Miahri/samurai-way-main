export type DialogsType = {
  id: number
  name: string
}

export type MessagesType = {
  id: number
  message: string
}

export type DialogPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
}

let initialState: DialogPageType = {
  dialogs: [
    {id: 1, name: 'Islam'},
    {id: 2, name: 'Rita'},
    {id: 3, name: 'Mama'},
    {id: 4, name: 'Elina'},
    {id: 5, name: 'Adema'},
  ],
  messages: [
    {id: 1, message: 'Molodes'},
    {id: 2, message: 'A ya siju na strime Viktora'},
    {id: 3, message: 'Ochen kruto'}
  ]
}

export const dialogsReducer = (state = initialState, action: DialogPageActionsType): DialogPageType => {
  switch (action.type) {
    case 'SEND-MESSAGE':
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 4, message: body}],
      }
    default:
      return state;
  }
}

export type DialogPageActionsType = SendMessageActionType;

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (newMessageBody: string) => {
  return {type: 'SEND-MESSAGE', newMessageBody} as const
}