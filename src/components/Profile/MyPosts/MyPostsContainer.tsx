import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {StateType} from "../../../redux/state";

const mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
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

