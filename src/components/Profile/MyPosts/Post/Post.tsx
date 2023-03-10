import React from 'react';
import postModule from './Post.module.css';

type PostPropsType = {
    message: string,
    likes: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={postModule.ava}>
            <img
                src="https://img.freepik.com/premium-vector/samurai-with-oni-mask_157713-489.jpg?size=338&ext=jpg&ga=GA1.2.671649503.1673040739"/>
            {props.message}
            <div>{props.likes} Likes</div>
        </div>
    );
}

