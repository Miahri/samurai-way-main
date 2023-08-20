import React from 'react';
import {Post} from './Post/Post';
import myPostsModule from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";
import {Field, reduxForm} from "redux-form";

type MyPostPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

export function MyPosts(props: MyPostPropsType) {
    let postItems = props.posts.map((p:PostsType) => <Post message={p.message} likes={p.likesCount}/>)

    const addPost = (values: any) => {
        if(values.newPostText) {
            props.addPost(values.newPostText)
        }
    }

    return (
        <div className={myPostsModule.content}>
            My posts
            <AddNewPostRedux onSubmit={addPost}/>
            {postItems}
        </div>
    );
}

const AddNewPost = (props: any) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field component="textarea" placeholder="Enter post" name="newPostText" />
          </div>
          <div><button>Post</button></div>
      </form>
    )
}

const AddNewPostRedux = reduxForm({form: 'MyPostsAddNewPost'})(AddNewPost);
