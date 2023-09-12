import profileModule from "./Profile.module.css";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void
};

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div className={profileModule.ava}>
        {{/*<img
           src="https://img.freepik.com/premium-vector/illustration-concept-of-samurai-warrior_157713-245.jpg?w=2000"/>*/
        }}
        <img src={props.profile.photos.large} alt={'profile-photo'}/>
      </div>
      <div className={profileModule.description}>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  )
}