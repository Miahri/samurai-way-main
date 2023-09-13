import React from 'react';
import {addPostActionCreator, PostsType} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MyPostsMapDispatchToPropsType = {
  addPost: (newPostText: string) => void
};

type MyPostsMapStateToPropsType = {
  posts: Array<PostsType>
};

const mapStateToProps = (state: AppRootStateType): MyPostsMapStateToPropsType => {
  return {
    posts: state.profilePage.posts
  }
};

const mapDispatchToProps = (dispatch: Dispatch): MyPostsMapDispatchToPropsType => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

