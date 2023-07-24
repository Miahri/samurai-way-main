type LocationType = {
    city: string
    country: string
}

export type PhotosType = {
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
    followingInProgress: Array<any>
}

let initialState: UserPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                users: [...action.users]
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
        case 'SET-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        default:
            return state;
    }
}

export type UserPageActionsType = FollowActionType | UnfollowActionType | SetUserActionType
    | setCurrentPageActionType | setUsersCountActionType | setFetchingActionType | setFollowingActionType;

export type FollowActionType = ReturnType<typeof follow>

export type UnfollowActionType = ReturnType<typeof unfollow>

export type SetUserActionType = ReturnType<typeof setUsers>

export type setCurrentPageActionType = ReturnType<typeof setCurrentPage>

export type setUsersCountActionType = ReturnType<typeof setUsersCount>

export type setFetchingActionType = ReturnType<typeof setFetching>

export type setFollowingActionType = ReturnType<typeof setFollowingInProgress>

export const follow = (userID: string) => {
    return {type: 'FOLLOW', userID: userID} as const
}

export const unfollow = (userID: string) => {
    return {type: 'UNFOLLOW', userID: userID} as const
}

export const setUsers = (users: Array<UserType>) => {
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

export const setFollowingInProgress = (isFetching: boolean, userID: string) => {
    return {type: 'SET-FOLLOWING-IN-PROGRESS', isFetching, userID} as const
}