import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let rootReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer
})

export let store = createStore(rootReducers);

export type AppRootStateType = ReturnType<typeof rootReducers>

//@ts-ignore
window.store = store;