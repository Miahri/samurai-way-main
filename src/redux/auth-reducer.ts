import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type AuthPageType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthPageType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: SetUserDataActionType): AuthPageType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export type SetUserDataActionType = ReturnType<typeof setUserData>


export const setUserData = (userId: number | null, email: string | null, login: string | null) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                let {email, id, login} = res.data.data;
                dispatch(setUserData(id, email, login));
            }
    })
}