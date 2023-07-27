import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
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
        profile: state.profilePage.profile,
        isAuth: state.authPage.isAuth
    }
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }

       userAPI.getUserProfile(userId).then(res => {
            this.props.setUserProfile(res.data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


* let mapStateToPropsForRedirect = (state: AppRootStateType) => {
*   isAuth: state.authPage.isAuth
* }

  AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
* */

let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={"/login"} />
    return <ProfileContainer {...props} />
}

const WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)