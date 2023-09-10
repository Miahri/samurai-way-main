import {AppRootStateType} from "./redux-store";
import {createSelector} from "reselect";

export const getAllUsersSelector = (state: AppRootStateType) => {
  return state.userPage.users
}

export const getAllUsers = createSelector(getAllUsersSelector, (users) => {
  return users.filter(u => true);
})

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
