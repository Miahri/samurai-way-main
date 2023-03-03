import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('State was changed')
    },
    subscribe(observer: any) {  /////////////to fix any
        this._callSubscriber = observer;
    },
    dispatch(action: any){  /////////////to fix any
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
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