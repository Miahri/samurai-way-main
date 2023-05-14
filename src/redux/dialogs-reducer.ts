
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

export type SendMessageActionType = ReturnType<typeof sendMessageActionCreator>
export type UpdateNewMsgTextActionType = ReturnType<typeof updateNewMsgTextActionCreator>

export const sendMessageActionCreator = () => {
    return {type: 'SEND-MESSAGE'} as const
}
export const updateNewMsgTextActionCreator = (message: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', message: message} as const
}