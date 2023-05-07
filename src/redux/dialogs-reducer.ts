
export const dialogsReducer = (state: any, action: DialogPageActionsType) => {
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

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewMsgTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    message: string
}

export const sendMessageActionCreator = () => {
    return {type: 'SEND_MESSAGE'}
}
export const updateNewMsgTextActionCreator = (message: string) => {
    return {type: 'UPDATE_NEW_MESSAGE_TEXT', message: message}
}