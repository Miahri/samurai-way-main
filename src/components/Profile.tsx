import React from 'react';
import '../App.css';

export function Profile() {
    return (
        <div className='app-content'>
            <div className='ava'>
                <img
                    src="https://production-it-incubator.s3.eu-central-1.amazonaws.com/personal-page-front-public%3Aavatar/Image/fe6760cb-5e82-453b-a3d2-7fe1b1f70b00_photo_2023-01-02_15-52-26.jpg"/>
            </div>
            <div>
                ava + description
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

