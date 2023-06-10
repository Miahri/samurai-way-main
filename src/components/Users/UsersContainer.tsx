import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followActionCreator, setCurrentPageActionCreator,
    setUserActionCreator, setUsersCountActionCreator,
    unfollowActionCreator,
    UserPageType,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";

type UsersMapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currenPage: state.userPage.currenPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setUsersCountActionCreator(count))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

