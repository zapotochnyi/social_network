import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";
const PROFILE_INFO_SUCCESS = "PROFILE_INFO_SUCCESS";

let initialState = {
  posts: [
    {
      id: 1,
      text: "Пока не узнаю, сколько %, спать не пойду. Волнуюсь же",
      quantity_likes: 108,
      quantity_reposts: 25,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU",
    },
    {
      id: 2,
      text: "С юбилеем Великой Победы вас! Не забудьте, в 22.00 праздничный салют",
      quantity_likes: 584,
      quantity_reposts: 56,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU",
    },
    {
      id: 3,
      text: "Порошенко напоминает мне картошку: либо осенью уберут, либо зимой замёрзнет",
      quantity_likes: 497,
      quantity_reposts: 14,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU",
    },
  ],

  profileInfo: null as any,
  status: "",
  isProfileInfoSuccess: false,
};

type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        text: action.newPostText,
        quantity_likes: 0,
        quantity_reposts: 0,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU",
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return { ...state, profileInfo: action.profileInfo };

    case SET_USER_STATUS:
      return { ...state, status: action.status };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p: { id: any }) => p.id !== action.postId),
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: action.photos },
      };

    case PROFILE_INFO_SUCCESS:
      return {
        ...state,
        isProfileInfoSuccess: action.isSuccess,
      };

    default:
      return state;
  }
};

export const addPost = (newPostText: string) =>
  ({
    type: ADD_POST,
    newPostText,
  } as const);

export const setUserProfile = (profileInfo: Object) =>
  ({
    type: SET_USER_PROFILE,
    profileInfo,
  } as const);

export const setUserStatus = (status: string) =>
  ({
    type: SET_USER_STATUS,
    status,
  } as const);

export const deletePost = (postId: number) =>
  ({ type: DELETE_POST, postId } as const);

export const savePhotoSuccess = (photos: Object) =>
  ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
  } as const);

export const profileInfoSuccess = (isSuccess: boolean) =>
  ({ type: PROFILE_INFO_SUCCESS, isSuccess } as const);

export const getProfile = (userId: number) => async (dispatch: Function) => {
  const response = await profileAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: Function) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setUserStatus(response.data));
};

export const updateUserStatus =
  (status: string) => async (dispatch: Function) => {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  };

export const savePhoto = (file: any) => async (dispatch: Function) => {
  const response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfileInfo =
  (info: Object) => async (dispatch: Function, getState: Function) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfileInfo(info);

    if (response.data.resultCode === 0) {
      dispatch(getProfile(userId));
      dispatch(profileInfoSuccess(true));
    } else {
      const errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Undefined error";

      const action = stopSubmit("edit-profile-information", {_error: errorMessage});
      dispatch(action);
      dispatch(profileInfoSuccess(false));
    }
  };

export default profileReducer;
