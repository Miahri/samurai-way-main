import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, ProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
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

        this.props.getUserProfileThunkCreator(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

/*export default compose(
    connect(mapStateToProps, {getUserProfileThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)*/

//need to delete
/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer);*/

let AuthRedirectComponent = (props: any) => {
    if (!props.isAuth) return <Redirect to={"/login"} />
    return <ProfileContainer {...props} />
}

const WithUrlDataProfileContainer = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataProfileContainer)