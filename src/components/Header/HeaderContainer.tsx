import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {UserType} from "../../redux/users-reducer";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login
    }
}

class HeaderContainer extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(res => {
            debugger
            if(res.data.resultCode === 0) {
                let {email, id, login} = res.data.data;
                this.props.setUserData(id, email, login);
            }
        })
    }

    render() {
        return (
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        );
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
