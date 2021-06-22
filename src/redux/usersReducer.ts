import { usersAPI } from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_BUTTON_DISABLE = "TOGGLE_BUTTON_DISABLE";

type InitialStateType = {
  users: Array<any>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  buttonDisableInProgress: Array<any>;
};

let initialState: InitialStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  buttonDisableInProgress: [],
};

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: true}),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
      };

    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case TOGGLE_BUTTON_DISABLE:
      return {
        ...state,
        buttonDisableInProgress: action.isFetching
          ? [...state.buttonDisableInProgress, action.userId]
          : state.buttonDisableInProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

type FollowUserSuccessActionType = {
  type: typeof FOLLOW;
  userId: number;
};
type UnfollowUserSuccessActionType = {
  type: typeof UNFOLLOW;
  userId: number;
};
type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<any>;
};
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  count: number;
};
type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
type ToggleButtonDisableActionType = {
  type: typeof TOGGLE_BUTTON_DISABLE;
  isFetching: boolean;
  userId: number;
};

export const followUserSuccess = (
  userId: number
): FollowUserSuccessActionType => ({ type: FOLLOW, userId });
export const unfollowUserSuccess = (
  userId: number
): UnfollowUserSuccessActionType => ({ type: UNFOLLOW, userId });
export const setUsers = (users: Array<any>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (
  currentPage: number
): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (
  totalUsersCount: number
): SetTotalUsersCountActionType => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleButtonDisable = (
  isFetching: boolean,
  userId: number
): ToggleButtonDisableActionType => ({
  type: TOGGLE_BUTTON_DISABLE,
  isFetching,
  userId,
});

export const requestUsers =
  (pageSize: number, currentPage: number) => async (dispatch: Function) => {
    dispatch(toggleIsFetching(true));

    let response = await usersAPI.getUsers(pageSize, currentPage);

      dispatch(toggleIsFetching(false));
      dispatch(setUsers(response.data.items));
      dispatch(setTotalUsersCount(response.data.totalCount));
  };

const followUnfollowFlow = async (
  dispatch: Function,
  id: number,
  apiMethod: Function,
  actionCreator: Function
) => {
  dispatch(toggleButtonDisable(true, id));

  let response = await apiMethod(id);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(id));
  };
  dispatch(toggleButtonDisable(false, id));
};

export const followUser = (id: number) => (dispatch: Function) => {
  followUnfollowFlow(
    dispatch,
    id,
    usersAPI.followUser.bind(usersAPI),
    followUserSuccess
  );
};

export const unfollowUser = (id: number) => (dispatch: Function) => {
  followUnfollowFlow(
    dispatch,
    id,
    usersAPI.unfollowUser.bind(usersAPI),
    unfollowUserSuccess
  );
};

export default usersReducer;
