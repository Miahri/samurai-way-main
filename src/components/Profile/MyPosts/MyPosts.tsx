import React from 'react';
import {Post} from './Post/Post';
import myPostsModule from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: any) => void
}

export function MyPosts(props: MyPostPropsType) {
    let postItems = props.posts.map((p:any) => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            props.dispatch(addPostActionCreator());
            props.dispatch(updateNewPostTextActionCreator(''));
        }
    }

    const updateNewPostText = () => {
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
        }
    }

    return (
        <div className={myPostsModule.content}>
            My posts
            <div>
                <textarea value={props.newPostText} ref={newPostElement} onChange={updateNewPostText}></textarea>
                <button onClick={addPost}>Post</button>
            </div>
            {postItems}
        </div>
    );
}

