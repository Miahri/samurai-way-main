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
    pageSize: number
    totalUsersCount: number
    currenPage: number
}

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currenPage: 1
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
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currenPage: action.currenPage
            }
        }
        case 'SET-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        default:
            return state;
    }
}

export type UserPageActionsType = FollowActionType | UnfollowActionType | SetUserActionType
    | setCurrentPageActionType | setUsersCountActionType

export type FollowActionType = ReturnType<typeof followActionCreator>

export type UnfollowActionType = ReturnType<typeof unfollowActionCreator>

export type SetUserActionType = ReturnType<typeof setUserActionCreator>

export type setCurrentPageActionType = ReturnType<typeof setCurrentPageActionCreator>

export type setUsersCountActionType = ReturnType<typeof setUsersCountActionCreator>

export const followActionCreator = (userID: string) => {
    return {type: 'FOLLOW', userID: userID} as const
}

export const unfollowActionCreator = (userID: string) => {
    return {type: 'UNFOLLOW', userID: userID} as const
}

export const setUserActionCreator = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users: users} as const
}

export const setCurrentPageActionCreator = (currenPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currenPage} as const
}

export const setUsersCountActionCreator = (totalUsersCount: number) => {
    return {type: 'SET-USERS-COUNT', totalUsersCount} as const
}