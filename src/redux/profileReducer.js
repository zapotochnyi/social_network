const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const ADD_POST = 'ADD-POST';

let initialState = {

    information: [
        {
            name: 'Backa Kartoflyanuy',
            date: '15.05.1999',
            city: 'Tokyo',
            education: 'LNU',
            web: '@elina'
        }
    ],

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

    avatars: [
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU',
            alt: 'batya'
        },

    ]
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
            return  {
                ...state,
                newPostValue: '',
                posts: [...state.posts, newPost],

            }

        default:
            return state;

    }

}

export const newPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_VALUE,
        newText: text
    }
}

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export default profileReducer;