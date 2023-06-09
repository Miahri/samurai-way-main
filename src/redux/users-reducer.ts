type LocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: string
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type UserPageType = {
    users: Array<UserType>
}

let initialState: UserPageType = {
    users: []
}

export const usersReducer = (state = initialState, action: UserPageActionsType): UserPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: true} : u)
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: false} : u)
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export type UserPageActionsType = FollowActionType | UnfollowActionType | SetUserActionType

export type FollowActionType = ReturnType<typeof followActionCreator>

export type UnfollowActionType = ReturnType<typeof unfollowActionCreator>

export type SetUserActionType = ReturnType<typeof setUserActionCreator>

export const followActionCreator = (userID: string) => {
    return {type: 'FOLLOW', userID: userID} as const
}

export const unfollowActionCreator = (userID: string) => {
    return {type: 'UNFOLLOW', userID: userID} as const
}

export const setUserActionCreator = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users: users} as const
}