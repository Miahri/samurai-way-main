import React from 'react';
import {Post} from './Post/Post';
import mypostsModule from './MyPosts.module.css';

export function MyPosts() {
    let message1 = "Hi. How are you?";
    let message2 = "It's my first post here!";
    let likes1 = 15;
    let likes2 = 20;

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

