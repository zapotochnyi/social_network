import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_BUTTON_DISABLE = 'TOGGLE_BUTTON_DISABLE';

type InitialStateType = {
    users: Array<any>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    buttonDisableInProgress: Array<any>
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonDisableInProgress: []
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};

        case TOGGLE_BUTTON_DISABLE:
            return {
                ...state,
                buttonDisableInProgress: action.isFetching
                    ? [...state.buttonDisableInProgress, action.userId]
                    : state.buttonDisableInProgress.filter(id => id != action.userId)
            };

        default:
            return state;

    }

}

type FollowUserSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowUserSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<any>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number 
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
type ToggleButtonDisableActionType = {
    type: typeof TOGGLE_BUTTON_DISABLE
    isFetching: boolean
    userId: number
}

export const followUserSuccess = (userId: number): FollowUserSuccessActionType => ({type: FOLLOW, userId});
export const unfollowUserSuccess = (userId: number): UnfollowUserSuccessActionType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<any>): SetUsersActionType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleButtonDisable = (isFetching: boolean, userId: number): ToggleButtonDisableActionType => ({type: TOGGLE_BUTTON_DISABLE, isFetching, userId});

export const getUsers = (pageSize: number, currentPage: number) => {

    return (dispatch: Function) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(pageSize, currentPage)
            .then(responce => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(responce.data.items));
                dispatch(setTotalUsersCount(responce.data.totalCount));
            });
    }
}
export const followUser = (id: number) => {
    return (dispatch: Function) => {
        dispatch(toggleButtonDisable(true, id));
        usersAPI.followUser(id)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(followUserSuccess(id));
                    dispatch(toggleButtonDisable(false, id));
                }
            })
    }
}
export const unfollowUser = (id: number) => {
    return (dispatch: Function) => {
        dispatch(toggleButtonDisable(true, id));
        usersAPI.unfollowUser(id)
            .then(responce => {
                if (responce.data.resultCode === 0) {
                    dispatch(unfollowUserSuccess(id));
                    dispatch(toggleButtonDisable(false, id));
                }
            })
    }
}


export default usersReducer;