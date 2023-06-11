/*need to fix typization
import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from './Users.module.css'
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
}

class Users extends React.Component {
    componentDidMount() {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
            this.props.setFetching(false);
        })
    }

    setPage(pageNumber: number) {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
        })
    }

    render() {
        let photoURL = 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360';

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = []
        for(let i = 1; i < pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                { pages.map(p => {
                    return <span className={this.props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => this.setPage(p)}>
                    {p}
                </span>
                })}
            </div>
            {this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : photoURL} className={styles.photo}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => this.props.unfollow}>Unfollow</button>
                        : <button onClick={() => this.props.follow}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)}
        </div>
    }
}

export default Users;*/
