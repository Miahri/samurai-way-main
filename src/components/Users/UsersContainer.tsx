import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow, getUsersThunkCreator,
    setCurrentPage, setFollowingInProgress, unfollow,
    UserPageType,
} from "../../redux/users-reducer";
import {Preloader} from "../Preloader/Preloader";
import {Users} from "./Users";

type UsersMapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setCurrentPage: (pageNumber: number) => void
    setFollowingInProgress: (isFetching: boolean, userID: string) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
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
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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

/*export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage,
    setFollowingInProgress, getUsersThunkCreator}),
)(UsersContainer)*/

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage,
    setFollowingInProgress, getUsersThunkCreator})(UsersContainer)

