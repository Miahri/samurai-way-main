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

export type ProfilePageActionsType = AddPostActionType | UpdateNewPostTextActionType

export type AddPostActionType = ReturnType<typeof addPostActionCreator>

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
    return {type: 'ADD-POST'} as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const
}