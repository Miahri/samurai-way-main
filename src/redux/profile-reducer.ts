export const profileReducer = (state: any, action: ProfilePageActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                message: state.newPostText, likesCount: 0
            }
            state.posts.push(newPost);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export type ProfilePageActionsType = AddPostActionType | UpdateNewPostTextActionType;

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export const addPostActionCreator = (): AddPostActionType => {
    return {type: 'ADD-POST'}
}

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText}
}