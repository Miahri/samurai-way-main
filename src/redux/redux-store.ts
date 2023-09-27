import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogsReducer,
  sidebar: sidebarReducer,
  userPage: usersReducer,
  authPage: authReducer,
  app: appReducer,
  form: formReducer
});

export type AppRootStateType = ReturnType<typeof rootReducer>;

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhance(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.store = store;