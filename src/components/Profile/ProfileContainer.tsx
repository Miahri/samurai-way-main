import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";

type MapStateToPropsType = {
    profile: UserType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: UserType) => void
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)