import React from 'react';
import {StoreType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostPropsType = {
    store: StoreType
}

export function MyPostsContainer(props: MyPostPropsType) {
    let state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''));
    }

    const updateNewPostText = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            posts={state.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    )
}

