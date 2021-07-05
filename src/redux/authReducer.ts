import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  photo: null as string | null,
  isAuth: false,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case SET_USER_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };

    default:
      return state;
  }
};

type payloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_AUTH_USER_DATA;
  payload: payloadType;
};

type SetUserPhotoActionType = {
  type: typeof SET_USER_PHOTO;
  photo: string;
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_AUTH_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const setUserPhoto = (photo: string): SetUserPhotoActionType => ({
  type: SET_USER_PHOTO,
  photo,
});

export const getAuthUserData = () => (dispatch: Function) => {
  return authAPI.getAuthUserData().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  });
};

export const setAuthUserPhoto = (id: number) => (dispatch: Function) => {
  return authAPI.setAuthUserPhoto(id).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserPhoto(response.data.photos.small));
    }
  });
};

export const login =
  (email: string, password: string, rememberMe: boolean) =>
  async (dispatch: Function) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      const errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Undefined error";
      const action = stopSubmit("login", { _error: errorMessage });
      dispatch(action);
    }
  };

export const logout = () => async (dispatch: Function) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
