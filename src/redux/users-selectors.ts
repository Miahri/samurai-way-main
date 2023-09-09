import {AppRootStateType} from "./redux-store";

export const getAllUsers = (state: AppRootStateType) => {
  return state.userPage.users
}

export const getPageSize = (state: AppRootStateType) => {
  return state.userPage.pageSize
}

export const getTotalUsersCount = (state: AppRootStateType) => {
  return state.userPage.totalUsersCount
}

export const getCurrentPage = (state: AppRootStateType) => {
  return state.userPage.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
  return state.userPage.isFetching
}

export const getFollowingInProgress = (state: AppRootStateType) => {
  return state.userPage.followingInProgress
}
