import React from 'react';
import profileModule from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserType} from "../../redux/users-reducer";

type ProfilePropsType = {
    profile: UserType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <div className={profileModule.wallpaper}>
                <img
                    alt={'img'}
                    src="https://img.freepik.com/free-vector/hand-drawn-chinese-style-illustration_23-2149716751.jpg?size=626&ext=jpg&ga=GA1.2.671649503.1673040739"/>
            </div>
            <div className={profileModule.profile}>
                <ProfileInfo profile={props.profile}/>
            </div>
            <MyPostsContainer />
        </div>
    );
}

