import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        }
        default:
            return state;
    }
}

export type SetUserDataActionType = ReturnType<typeof setUserData>


export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login, isAuth}} as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then(res => {
            if(res.data.resultCode === 0) {
                let {email, id, login} = res.data.data;
                dispatch(setUserData(id, email, login, true));
            }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
      .then(res => {
          if(res.data.resultCode === 0) {
              dispatch(getAuthUserData())
          } else {
            let message = res.data.message.length > 0 ? res.data.message[0] : "Some error";
            dispatch(stopSubmit("login", {_error: message}));
          }
      });
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
      .then(res => {
          if(res.data.resultCode === 0) {
              dispatch(setUserData(null, null,null, false));
          }
      });
}
