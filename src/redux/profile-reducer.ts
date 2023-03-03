export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: any, action: any) => {    /////////////to fix any
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText, likesCount: 0
            }
            state.posts.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}