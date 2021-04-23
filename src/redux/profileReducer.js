import {headerAPI, profileAPI} from "../api/api";

const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {

    newPostValue: '',

    posts: [
        {
            id: 1,
            text: 'Пока не узнаю, сколько %, спать не пойду. Волнуюсь же',
            quantity_likes: 108,
            quantity_reposts: 25,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
        },
        {
            id: 2,
            text: 'С юбилеем Великой Победы вас! Не забудьте, в 22.00 праздничный салют',
            quantity_likes: 584,
            quantity_reposts: 56,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
        },
        {
            id: 3,
            text: 'Порошенко напоминает мне картошку: либо осенью уберут, либо зимой замёрзнет',
            quantity_likes: 497,
            quantity_reposts: 14,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
        },
    ],

    profileInfo: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_VALUE:
            return {
                ...state,
                newPostValue: action.newText
            }

        case ADD_POST:
            let newPost = {
                id: 4,
                text: state.newPostValue,
                quantity_likes: 0,
                quantity_reposts: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
            }
            return {
                ...state,
                newPostValue: '',
                posts: [...state.posts, newPost],

            }

        case SET_USER_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        }

        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state;

    }

}

export const newPostText = (text) => ({type: UPDATE_NEW_POST_VALUE, newText: text});
export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getProfile = (userId) => (dispatch) => {
    if (!userId) {
        userId = 2;
    }
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        })
}

export const getUserStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatus(data));
            })
}

export const updateUserStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                }
            })
}

export default profileReducer;