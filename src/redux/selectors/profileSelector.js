export const getProfileSelector = (state) => {
    return state.profile;
};

export const getAuthorisedUserId = (state) => {
    return state.auth.id;
};

export const getIsAuth = (state) => {
    return state.auth.isAuth;
};


