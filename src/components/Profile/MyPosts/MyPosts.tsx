import React from 'react';
import {Post} from './Post/Post';
import mypostsModule from './MyPosts.module.css';

export function MyPosts() {
    let message1:string = "Hi. How are you?";
    let message2:string = "It's my first post here!";
    let likes1:number = 15;
    let likes2:number = 20;

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Post</button>
            </div>
            <Post message={message1} likes={likes1}/>
            <Post message={message2} likes={likes2}/>
        </div>
    );
}

