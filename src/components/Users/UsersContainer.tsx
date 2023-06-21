import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setFetching, setUsers, setUsersCount, unfollow,
    UserPageType, UserType,
} from "../../redux/users-reducer";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader";
import {Users} from "./Users";

type UsersMapDispatchToPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
}

export type UsersContainerPropsType = UserPageType & UsersMapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): UserPageType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            debugger
            this.props.setUsers(res.data.items);
            this.props.setUsersCount(res.data.totalCount);
            this.props.setFetching(false);
        })
    }

    onPageChange = (pageNumber: number) => {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
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
                       onPageChange={this.onPageChange} />
            </>
        )
    }}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setUsersCount, setFetching})(UsersContainer)

