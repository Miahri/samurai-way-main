import {getAuthUserData} from "./auth-reducer";

type AppPageType = {
  initialized: boolean
}

let initialState = {
  initialized: false
}

export const appReducer = (state = initialState, action: SetInitializedActionType): AppPageType => {
  switch (action.type) {
    case 'SET-INITIALIZED': {
      return {
        ...state,
        initialized: true
      }
    }
    default:
      return state;
  }
}

export type SetInitializedActionType = ReturnType<typeof setInitialized>


export const setInitialized = () => {
  return {type: 'SET-INITIALIZED'} as const
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(setInitialized());
  });
}


