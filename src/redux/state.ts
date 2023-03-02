export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SEND_MESSAGE = 'SEND-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}
export const sendMessageActionCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMsgTextActionCreator = (message: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, message: message}
}

export const store = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi. How are you?", likesCount: 15},
                {message: "It's my first post here!", likesCount: 20}
            ],
            newPostText: ''
        },
        dialogPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('State was changed')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },
    dispatch(action: any){
        if(action.type === ADD_POST){
            let newPost = {
                message: this._state.profilePage.newPostText, likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 4, message: this._state.dialogPage.newMessageText
            }
            this._state.dialogPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.message;
            this._callSubscriber(this._state);
        }
    }
}

export type PostsType = {
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}