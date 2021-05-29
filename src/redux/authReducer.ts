import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    photo: null as string | null,
    isAuth: false
}

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type payloadType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: payloadType
}
type SetUserPhotoActionType = {
    type: typeof SET_USER_PHOTO
    photo: string
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
});
export const setUserPhoto = (photo: string): SetUserPhotoActionType => ({type: SET_USER_PHOTO, photo});

export const getAuthUserData = () => (dispatch: Function) => {
    return authAPI.getAuthUserData()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, email, login} = responce.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}
export const setAuthUserPhoto = (id: number) => (dispatch: Function) => {
    authAPI.setAuthUserPhoto(id)
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setUserPhoto(responce.data.photos.small));
            }
        })
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Function) => {
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
export const logout = () => (dispatch: Function) => {
    authAPI.logout()
        .then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export default authReducer;