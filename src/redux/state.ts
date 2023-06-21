import {
    ProfilePageActionsType,
    profileReducer,
} from "./profile-reducer";
import {DialogPageActionsType, dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UserType} from "./users-reducer";

type ActionRootType = ProfilePageActionsType & DialogPageActionsType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionRootType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi. How are you?", likesCount: 15},
                {message: "It's my first post here!", likesCount: 20}
            ],
            newPostText: '',
            profile: {
                name: "Hacker",
                id: '2',
                photos: {
                    small: '',
                    large: ''
                },
                status: '',
                followed: false
            }
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
        sidebar: {
            pages: ['1', '2']
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log('State was changed:' + state)
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionRootType) {
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

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: UserType
}

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
    newMessageText: string
}

export type SidebarType = {
    pages: Array<string>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}