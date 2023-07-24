import React from 'react';
import {setFollowingInProgress, UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import profile_photo from '../../assets/images/profile_photo.jpg'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<any>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    onPageChange: (page: number) => void
    setFollowingInProgress: (isFetching: boolean, userID: string) => void
}

export function Users(props: UsersPropsType) {
    //const photoURL = 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360';

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    console.log(props.totalUsersCount);
    
    let pages: Array<number> = []
    for(let i = 1; i < pagesCount; i++){
        pages.push(i);
    }

    return <div>
        <div>
            { pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => props.onPageChange(p)}>
                    {p}
                </span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt={'profile-photo'}
                             src={u.photos.small != null ? u.photos.small : profile_photo} className={styles.photo}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setFollowingInProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c85010c8-14b3-4039-b4af-7e02411657e5"
                                }
                            }).then(res => {
                                if(res.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.setFollowingInProgress(false, u.id);
                            })
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.setFollowingInProgress(true, u.id);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "c85010c8-14b3-4039-b4af-7e02411657e5"
                                }
                            }).then(res => {
                                if(res.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.setFollowingInProgress(false, u.id);
                            })
                        }}>Follow</button>
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

