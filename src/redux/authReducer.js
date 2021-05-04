import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
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

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo});

export const getAuthUserData = () => (dispatch) => {
    authAPI.getAuthUserData()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, email, login} = responce.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}
export const setAuthUserPhoto = (id) => (dispatch) => {
    authAPI.setAuthUserPhoto(id)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserPhoto(responce.data.photos.small));
            }
        })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else {
                let errorMessage = responce.data.messages.length > 0 ? responce.data.messages : 'Undefined error';
                let action = stopSubmit('login', {_error: errorMessage});
                dispatch(action);
            }
        })
}
export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export default authReducer;