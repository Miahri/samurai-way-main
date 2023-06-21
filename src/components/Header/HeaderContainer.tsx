import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setUserData} from "../../redux/auth-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type MapDispatchToPropsType = {
    setUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
    }
}

class HeaderContainer extends React.Component<MapDispatchToPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(res => {
            debugger
            let [id, email, login] = res.data.items
            this.props.setUserData(id, email, login);
        })
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)
