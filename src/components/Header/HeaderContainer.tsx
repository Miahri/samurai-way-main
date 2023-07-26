import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login
    }
}

class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)
