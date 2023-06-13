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
    currentPage: number
    isFetching: boolean
}

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                currentPage: action.currentPage
            }
        }
        case 'SET-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case 'SET-FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export type UserPageActionsType = FollowActionType | UnfollowActionType | SetUserActionType
    | setCurrentPageActionType | setUsersCountActionType | setFetchingActionType

export type FollowActionType = ReturnType<typeof follow>

export type UnfollowActionType = ReturnType<typeof unfollow>

export type SetUserActionType = ReturnType<typeof setUser>

export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type setUsersCountActionType = ReturnType<typeof setUsersCount>

export type setFetchingActionType = ReturnType<typeof setFetching>

export const follow = (userID: string) => {
    return {type: 'FOLLOW', userID: userID} as const
}

export const unfollow = (userID: string) => {
    return {type: 'UNFOLLOW', userID: userID} as const
}

export const setUser = (users: Array<UserType>) => {
    return {type: 'SET-USERS', users: users} as const
}

export const setCurrentPage = (currentPage: number) => {
    return {type: 'SET-CURRENT-PAGE', currentPage} as const
}

export const setUsersCount = (totalUsersCount: number) => {
    return {type: 'SET-USERS-COUNT', totalUsersCount} as const
}
export const setFetching = (isFetching: boolean) => {
    return {type: 'SET-FETCHING', isFetching} as const
}