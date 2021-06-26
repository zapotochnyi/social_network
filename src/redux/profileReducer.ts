import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const DELETE_POST = "DELETE_POST";

type PostsType = [
    {
        id: number;
        text: string;
        quantity_likes: number;
        quantity_reposts: number;
        avatar: string;
    },
    {
        id: number;
        text: string;
        quantity_likes: number;
        quantity_reposts: number;
        avatar: string;
    },
    {
        id: number;
        text: string;
        quantity_likes: number;
        quantity_reposts: number;
        avatar: string;
    }
];

export type InitialStateType = {
    posts: PostsType | any;
    profileInfo: Object | null;
    status: string;
};

let initialState: InitialStateType = {
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

    profileInfo: null,
    status: "",
};

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

        case SET_USER_PROFILE: {
            return {...state, profileInfo: action.profileInfo};
        };

        case SET_USER_STATUS: {
            return {...state, status: action.status};
        };

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p: { id: any; }) => p.id !== action.postId),
            }
        };

        default:
            return state;
    }
};

type AddPostActionType = {
    type: typeof ADD_POST;
    newPostText: string;
};

type ProfileInfoType = {
    id: number;
    login: string;
    email: string;
};

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE;
    profileInfo: ProfileInfoType;
};

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS;
    status: string;
};

type DeletePostActionType = ReturnType<typeof deletePost>;

export const addPost = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText,
});

export const setUserProfile = (
    profileInfo: ProfileInfoType
): SetUserProfileActionType => ({type: SET_USER_PROFILE, profileInfo});

export const setUserStatus = (status: string): SetUserStatusActionType => ({
    type: SET_USER_STATUS,
    status,
});

export const deletePost = (postId: number) => ({type: DELETE_POST, postId} as const);

export const getProfile = (userId: number) => async (dispatch: Function) => {
    let response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId: number) => async (dispatch: Function) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setUserStatus(response.data));
};

export const updateUserStatus =
    (status: string) => async (dispatch: Function) => {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    };

export default profileReducer;
