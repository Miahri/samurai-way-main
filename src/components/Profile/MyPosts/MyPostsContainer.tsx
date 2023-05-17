import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().profilePage;

                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
                        store.dispatch(updateNewPostTextActionCreator(''));
                    }

                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text));
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
            }
        </StoreContext.Consumer>
    )
}

