import React from 'react';
import {Post} from './Post/Post';
import myPostsModule from './MyPosts.module.css';
import {PostsType} from "../../../redux/state";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";

type MyPostPropsType = {
  posts: Array<PostsType>
  addPost: (newPostText: string) => void
};

const maxLength10 = maxLengthCreator(10);

export function MyPosts(props: MyPostPropsType) {
  let postItems = props.posts.map((p: PostsType) => <Post message={p.message} likes={p.likesCount}/>);

  const addPost = (values: any) => {
    props.addPost(values.newPostText)
  };

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
      { createField([required, maxLength10], 'Enter post', 'newPostText', Textarea) }
      <div>
        <button>Post</button>
      </div>
    </form>
  )
}

const AddNewPostRedux = reduxForm({form: 'MyPostsAddNewPost'})(AddNewPost);
