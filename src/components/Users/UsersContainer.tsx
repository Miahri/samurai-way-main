import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followActionCreator, setCurrentPageActionCreator, setFetchingActionCreator,
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
    setFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
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
        },
        setFetching: (isFetching: boolean) => {
            dispatch(setFetchingActionCreator(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

