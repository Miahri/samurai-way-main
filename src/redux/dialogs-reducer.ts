export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsReducer = (state: any, action: any) => {    /////////////to fix any
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 4, message: state.newMessageText
            }
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMsgTextActionCreator = (message: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, message: message}
}