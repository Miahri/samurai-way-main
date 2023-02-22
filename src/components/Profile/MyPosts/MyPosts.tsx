import React from 'react';
import {Post} from './Post/Post';
import myPostsModule from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: (message: string) => void
}

export function MyPosts(props: MyPostPropsType) {
    let postItems = props.posts.map((p:any) => <Post message={p.message} likes={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if(newPostElement.current) {
            props.addPost(newPostElement.current.value);
            newPostElement.current.value = '';
        }
    }

    return (
        <div className={myPostsModule.content}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Post</button>
            </div>
            {postItems}
        </div>
    );
}

