import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_BUTTON_DISABLE = 'TOGGLE_BUTTON_DISABLE';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    buttonDisableInProgress: []
}

const usersReducer = (state = initialState, action) => {
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

export const followUserSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowUserSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleButtonDisable = (isFetching, userId) => ({type: TOGGLE_BUTTON_DISABLE, isFetching, userId});

export const getUsers = (pageSize, currentPage) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
}
export const followUser = (id) => {
    return (dispatch) => {
        dispatch(toggleButtonDisable(true, id));
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followUserSuccess(id));
                    dispatch(toggleButtonDisable(false, id));
                }
            })
    }
}
export const unfollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleButtonDisable(true, id));
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUserSuccess(id));
                    dispatch(toggleButtonDisable(false, id));
                }
            })
    }
}


export default usersReducer;