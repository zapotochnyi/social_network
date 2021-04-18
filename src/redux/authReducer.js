import {headerAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    id: null,
    email: null,
    login: null,
    photo: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_USER_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        default:
            return state;
    }

}

export const setAuthUserData = (id, email, login) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});

export const getAuthUserData = () => {
    return (dispatch) => {
        headerAPI.getAuthUserData()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
export const setAuthUserPhoto = (id) => {
    return (dispatch) => {
        headerAPI.setAuthUserPhoto(id)
            .then(data => {
                if (data.resultCode ===0) {
                    dispatch(setUserPhoto(data.photos.small));
                }
            })
    }
}

export default authReducer;