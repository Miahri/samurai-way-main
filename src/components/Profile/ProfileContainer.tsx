import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunkCreator, getStatus, updateStatus, ProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
  profile: ProfileType
  status: string
  isAuth: boolean
  authorizedUserId: number | null
};

type MapDispatchToPropsType = {
  getUserProfileThunkCreator: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
};

type PathParamType = {
  userId: string
};

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;
type PropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType;

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.authPage.isAuth,
    authorizedUserId: state.authPage.id
  }
};

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = '2';
    }

    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatus(userId);
  };

  render() {
    return <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
    />
  }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfileThunkCreator, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
