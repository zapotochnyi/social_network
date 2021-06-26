import React from 'react';
import profileReducer, {addPost, deletePost, setUserProfile} from "./profileReducer";

let state = {
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

it('length of posts should be incremented', () => {
    let action = addPost("New post was added");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

it('profile info must be setting ', () => {
    let profileData = {id: 2, email: "fake@gmail.com", login: "Dimych"}

    let action = setUserProfile(profileData);

    let newState = profileReducer(state, action);

    expect(newState.profileInfo).toBe(profileData);
});

it('length of posts must be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});

