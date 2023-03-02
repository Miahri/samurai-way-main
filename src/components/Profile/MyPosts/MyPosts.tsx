import React from 'react';
import {Post} from './Post/Post';
import myPostsModule from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";

type MyPostPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
}

export function MyPosts(props: MyPostPropsType) {
    let postItems = props.posts.map((p:any) => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value);
            props.updateNewPostText('');
        }
    }

    const updateNewPostText = () => {
        if(newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value);
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

