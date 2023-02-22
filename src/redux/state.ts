import {rerenderEntireTree} from "../render";

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
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {message: "Hi. How are you?", likesCount: 15},
            {message: "It's my first post here!", likesCount: 20}
        ]
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
        ]
    }
}

export const addPost = (message: string) => {
    let newPost = {
        message: message, likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}