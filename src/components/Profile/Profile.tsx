import React from 'react';
import profileModule from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo";
import {StoreType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <div className={profileModule.wallpaper}>
                <img
                    src="https://img.freepik.com/free-vector/hand-drawn-chinese-style-illustration_23-2149716751.jpg?size=626&ext=jpg&ga=GA1.2.671649503.1673040739"/>
            </div>
            <div className={profileModule.profile}>
                <ProfileInfo />
            </div>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

