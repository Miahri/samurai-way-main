import {UserType} from "./users-reducer";

export type PostsType = {
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: UserType
}

let initialState: ProfilePageType = {
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
}

export const profileReducer = (state = initialState, action: ProfilePageActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                message: state.newPostText, likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export type ProfilePageActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
}

export const setUserProfile = (profile: any) => {
    return {type: 'SET-USER-PROFILE', profile: profile} as const
}