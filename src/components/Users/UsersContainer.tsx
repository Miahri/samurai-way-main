import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followActionCreator,
    setUserActionCreator,
    unfollowActionCreator,
    UserPageType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";

type UsersMapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID: string) => {
            dispatch(unfollowActionCreator(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUserActionCreator(users));
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

