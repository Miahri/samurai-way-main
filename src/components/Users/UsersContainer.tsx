import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFetching, setUser, setUsersCount, unfollow,
    UserPageType,
} from "../../redux/users-reducer";
import {Users} from "./Users";

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUser, setCurrentPage,
    setUsersCount, setFetching})(Users)

