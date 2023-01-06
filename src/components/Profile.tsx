import React from 'react';
import '../App.css';
import profileModule from './Profile.module.css';

export function Profile() {
    return (
        <div className={profileModule.appContent}>
            <div className={profileModule.walpapper}>
                <img
                    src="https://img.freepik.com/free-vector/hand-drawn-chinese-style-illustration_23-2149716751.jpg?size=626&ext=jpg&ga=GA1.2.671649503.1673040739"/>
            </div>
            <div className={profileModule.profile}>
                <div className={profileModule.ava}>
                    <img src="https://img.freepik.com/premium-vector/illustration-concept-of-samurai-warrior_157713-245.jpg?w=2000"/>
                </div>
                <div className={profileModule.description}>
                    description
                </div>
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 1
                </div>
            </div>
        </div>
    );
}

