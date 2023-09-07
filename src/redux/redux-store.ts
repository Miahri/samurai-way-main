import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  userPage: usersReducer,
  authPage: authReducer,
  app: appReducer,
  form: formReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;