import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFetching, setFollowingInProgress, setUsers, setUsersCount, unfollow,
    UserPageType, UserType,
} from "../../redux/users-reducer";
import {Preloader} from "../Preloader/Preloader";
import {Users} from "./Users";
import {userAPI} from "../../api/api";

type UsersMapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
    setFollowingInProgress: (isFetching: boolean, userID: string) => void
}

export type UsersContainerPropsType = UserPageType & UsersMapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setUsersCount(data.totalCount);
            this.props.setFetching(false);
        })
    }

    onPageChange = (pageNumber: number) => {
        debugger
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items);
            })
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChange={this.onPageChange}
                       setFollowingInProgress={this.props.setFollowingInProgress}
                       followingInProgress={this.props.followingInProgress} />
            </>
        )
    }}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setUsersCount, setFetching, setFollowingInProgress})(UsersContainer)

