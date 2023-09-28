import {DialogPageType} from "./state";

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
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initialState, action: DialogPageActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 4, message: state.newMessageText
            }
            state.messages.push(newMessage);
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export type DialogPageActionsType = SendMessageActionType | UpdateNewMsgTextActionType;

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMsgTextActionType = ReturnType<typeof updateNewMsgTextActionCreator>

export const sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
}
export const updateNewMsgTextActionCreator = (message: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', message: message} as const
}