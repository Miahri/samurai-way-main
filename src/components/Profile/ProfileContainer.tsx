import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type PathParamType = {
    userId: string
}

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${+userId}`).then(res => {
            debugger
            this.props.setUserProfile(res.data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const WithUrlDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)