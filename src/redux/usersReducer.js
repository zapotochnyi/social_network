const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: false,
        //     avatar: 'https://c-sf.smule.com/rs-s78/arr/bd/78/520dbe69-9dfc-4b93-b350-6d295a0f8cda.jpg',
        //     name: 'Antin Bobrov',
        //     status: 'Feel good',
        //     location: {country: 'Ukraine', city: 'Kyiv'}
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     avatar: 'https://www.meme-arsenal.com/memes/c7b480944fe90f7e7c5e1ba5c8200cd2.jpg',
        //     name: 'Alina Ogirok',
        //     status: 'Love this',
        //     location: {country: 'Russia', city: 'Moscow'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     avatar: 'https://apkshki.com/storage/5005/icon_5f2c4f42ad9c2_5005_w256.png',
        //     name: 'Peter Gig',
        //     status: 'Fight no more',
        //     location: {country: 'Belarus', city: 'Minsk'}
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     avatar: 'http://www.miranime.ru/uploads/posts/2017-01/1483555183_anime-hajime-no-ippo-the-fighting-thumb.jpg',
        //     name: 'John Snow',
        //     status: 'Virtual god',
        //     location: {country: 'USA', city: 'New York'}
        // }
    ]
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
            return {...state, users: {...state.users, ...action.users}};

        default:
            return state;

    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;