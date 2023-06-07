import React from 'react';
import {UserType} from "../../redux/users-reducer";
import styles from 'Users.module.css'

type UsersPropsType = {
    users: UserType[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UserType[]) => void
}

export function Users(props: UsersPropsType) {
    if (props.users.length === 0) {
        props.setUsers([
            {id: '1', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Selbi', note: "I'm happy", location: {city: 'Istanbul', country: 'Turkey'}},
            {id: '2', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Yhlas', note: "I'm happy too", location: {city: 'Mary', country: 'Turkmenistan'}},
            {id: '3', photoURL: 'https://im.haberturk.com/l/2019/10/31/ver1572526744/2536158/jpg/640x360',
                followed: false, fullname: 'Myrat', note: "I'm a boss", location: {city: 'Moscow', country: 'Russia'}},
        ])
    }

    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL} className={styles.photo}/>
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
                    <div>{u.fullname}</div>
                    <div>{u.note}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
}

