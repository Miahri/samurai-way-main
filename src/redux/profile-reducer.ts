export type PostsType = {
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

let initialState: ProfilePageType = {
    posts: [
        {message: "Hi. How are you?", likesCount: 15},
        {message: "It's my first post here!", likesCount: 20}
    ],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: ProfilePageActionsType): ProfilePageType => {
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