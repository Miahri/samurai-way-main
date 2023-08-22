import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followTC, getUsersThunkCreator,
    setCurrentPage, setFollowingInProgress, unfollowTC,
    UserPageType,
} from "../../redux/users-reducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {Users} from "./Users";

type UsersMapDispatchToPropsType = {
    followTC: (userID: string) => void
    unfollowTC: (userID: string) => void
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
                       followTC={this.props.followTC}
                       unfollowTC={this.props.unfollowTC}
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


//need to delete
export default connect(mapStateToProps, {followTC, unfollowTC, setCurrentPage,
    setFollowingInProgress, getUsersThunkCreator})(UsersContainer)

