import React from 'react';
import {addPostActionCreator, profileReducer} from "../redux/profile-reducer";

it('new post should be added', () => {
  let action = addPostActionCreator("introduction-post");
  let state = {
    posts: [
      {message: "Hi. How are you?", likesCount: 15},
      {message: "It's my first post here!", likesCount: 20}
    ],
    profile: null,
    status: ''
  };

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});