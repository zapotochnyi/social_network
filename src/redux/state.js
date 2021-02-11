let store = {
    _state: {
        profilePage: {

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
                    text: 'Пока не узнаю, сколько %, спать не пойду. Волнуюсь же',
                    quantity_likes: 108,
                    quantity_reposts: 25,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
                },
                {
                    text: 'С юбилеем Великой Победы вас! Не забудьте, в 22.00 праздничный салют',
                    quantity_likes: 584,
                    quantity_reposts: 56,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
                },
                {
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
        },

        messagesPage: {
            dialogs: [
                {
                    id: '1',
                    avatar: 'https://pbs.twimg.com/profile_images/616054956215418880/yj3QVKom_400x400.jpg',
                    name: 'Vasya'
                },
                {
                    id: '2',
                    avatar: 'https://www.meme-arsenal.com/memes/c7b480944fe90f7e7c5e1ba5c8200cd2.jpg',
                    name: 'Nata'
                },
                {
                    id: '3',
                    avatar: 'https://apkshki.com/storage/5005/icon_5f2c4f42ad9c2_5005_w256.png',
                    name: 'Vasylyna'
                },
                {
                    id: '4',
                    avatar: 'https://c-sf.smule.com/rs-s78/arr/bd/78/520dbe69-9dfc-4b93-b350-6d295a0f8cda.jpg',
                    name: 'Anton'
                },
                {
                    id: '5',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3oMDPyVHYOoxYaud9ZjO9PG9hyT05_y0GQ&usqp=CAU',
                    name: 'Igor'
                },
                {
                    id: '6',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fBwuripjp81ckv2C-eE_ieYXuEll5zEb1w&usqp=CAU',
                    name: 'Gosha'
                }
            ],

            messagesIn: [
                {idIn: 1, textIn: 'Hello!'},
                {idIn: 2, textIn: 'How you doing?'},
                {idIn: 3, textIn: 'Lets go drink some russian vodka!!!'},

            ],

            newMessageValue: '',

            messagesOut: [
                {idOut: 1, textOut: 'Okay, lets go!'},
                {idOut: 2, textOut: 'YEEE,BOOOZEE!!'},
            ]

        },

        navBar: {
            friends: [
                {
                    id: '1',
                    avatar: "https://pbs.twimg.com/profile_images/616054956215418880/yj3QVKom_400x400.jpg",
                    name: 'Vasya'
                },
                {
                    id: '2',
                    avatar: "https://www.meme-arsenal.com/memes/c7b480944fe90f7e7c5e1ba5c8200cd2.jpg",
                    name: 'Nata'
                },
                {
                    id: '3',
                    avatar: "https://apkshki.com/storage/5005/icon_5f2c4f42ad9c2_5005_w256.png",
                    name: 'Vasylyna'
                },
            ],
        }
    },

    _callSubscriber() {
        console.log('state changed')
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        debugger;
        if (action.type === 'UPDATE-NEW-POST-VALUE') {
            this._state.profilePage.newPostValue = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'ADD-POST') {
            let newPost = {
                text: this._state.profilePage.newPostValue,
                quantity_likes: 0,
                quantity_reposts: 0,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
            }
            this._state.profilePage.posts.push(newPost);

            this._state.profilePage.newPostValue = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MESSAGE-VALUE') {
            debugger;
            this._state.messagesPage.newMessageValue = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                idOut: 3,
                textOut: this._state.messagesPage.newMessageValue
            };
            this._state.messagesPage.messagesOut.push(newMessage);
            this._state.messagesPage.newMessageValue = '';
            this._callSubscriber(this._state);
        }
    },

    // updateNewPostValue(newText) {
    //
    //     this._state.profilePage.newPostValue = newText;
    //     this._callSubscriber(this._state);
    // },
    // addPost() {
    //
    //     let newPost = {
    //         text: this._state.profilePage.newPostValue,
    //         quantity_likes: 0,
    //         quantity_reposts: 0,
    //         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU'
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //
    //     this._state.profilePage.newPostValue = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageValue(newText) {
    //
    //     this._state.messagesPage.newMessageValue = newText;
    //     this._callSubscriber(this._state);
    // },
    // sendMessage() {
    //     let newMessage = {
    //         idOut: 3,
    //         textOut: this._state.messagesPage.newMessageValue
    //     };
    //     this._state.messagesPage.messagesOut.push(newMessage);
    //     this.updateNewMessageValue('');
    //     this._callSubscriber(this._state);
    // }

}

window.state = store._state;

export default store;

