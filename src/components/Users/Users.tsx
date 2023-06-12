import React from 'react';
import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import axios from 'axios';
import {Preloader} from "../Preloader/Preloader";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setFetching: (isFetching: boolean) => void
}

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`).then(res => {
            props.setUsers(res.data.items);
            props.setTotalUsersCount(res.data.totalCount);
            props.setFetching(false);
        })

        /*props.setUsers([
            {id: '1', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Selbi', note: "I'm happy", location: {city: 'Istanbul', country: 'Turkey'}},
            {id: '2', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Yhlas', note: "I'm happy too", location: {city: 'Mary', country: 'Turkmenistan'}},
            {id: '3', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Myrat', note: "I'm a boss", location: {city: 'Moscow', country: 'Russia'}},
        ])*/
    }

    const photoURL = 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360';

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    
    let pages: Array<number> = []
    for(let i = 1; i < pagesCount; i++){
        pages.push(i);
    }

    const setPage = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(res => {
            props.setUsers(res.data.items);
        })
    }

    return <div>
        {props.isFetching ? <Preloader /> : null}
        <div>
            { pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => setPage(p)}>
                    {p}
                </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : photoURL} className={styles.photo}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => props.unfollow}>Unfollow</button>
                        : <button onClick={() => props.follow}>Follow</button>
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

