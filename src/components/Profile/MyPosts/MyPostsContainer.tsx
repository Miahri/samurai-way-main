import React from 'react';
import {addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MyPostsMapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const mapStateToProps = (state: AppRootStateType): ProfilePageType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MyPostsMapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
            dispatch(updateNewPostTextActionCreator(''));
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

