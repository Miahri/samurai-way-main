import profileModule from "./Profile.module.css";
import React from "react";
import {Preloader} from "../Preloader/Preloader";
import {ProfileType} from "../../redux/profile-reducer";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}


export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <div className={profileModule.ava}>
                {{/*<img
                    src="https://img.freepik.com/premium-vector/illustration-concept-of-samurai-warrior_157713-245.jpg?w=2000"/>*/}}
                <img src={props.profile.photos.large}/>
            </div>
            <div className={profileModule.description}>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}