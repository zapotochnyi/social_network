import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_USER_PHOTO = "SET_USER_PHOTO";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";

let initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  photo: null as string | null,
  isAuth: false,
  captchaUrl: null as any | null,
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

    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) =>
  ({
    type: SET_AUTH_USER_DATA,
    payload: { id, email, login, isAuth },
  } as const);

export const setUserPhoto = (photo: string) =>
  ({
    type: SET_USER_PHOTO,
    photo,
  } as const);

export const setCaptchaUrl = (captchaUrl: any) =>
  ({
    type: SET_CAPTCHA_URL,
    captchaUrl,
  } as const);

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
  (email: string, password: string, rememberMe: boolean, captcha: string) =>
  async (dispatch: Function) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      const errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Undefined error";
      const action = stopSubmit("login", { _error: errorMessage });
      dispatch(action);
    }
  };

export const getCaptchaUrl = () => async (dispatch: Function) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(setCaptchaUrl(captchaUrl));
};

export const logout = () => async (dispatch: Function) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
