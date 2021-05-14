const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: string
    avatar: string
    name: string
}
type MessageInType = {
    idIn: number
    textIn: string
}
type MessageOutType = {
    idOut: number
    textOut: string
}

let initialState = {
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
    ] as Array<DialogType>,

    messagesIn: [
        {idIn: 1, textIn: 'Hello!'},
        {idIn: 2, textIn: 'How you doing?'},
        {idIn: 3, textIn: 'Lets go drink some russian vodka!!!'},
    ] as Array<MessageInType>,

    messagesOut: [
        {idOut: 1, textOut: 'Okay, lets go!'},
        {idOut: 2, textOut: 'YEEE,BOOOZEE!!'},
    ] as Array<MessageOutType>

}

export type InitialStateType = typeof initialState;

const messagesReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {

        case SEND_MESSAGE:
            let newMessage = {
                idOut: 3,
                textOut: action.newMessageText
            }
            return {
                ...state,
                messagesOut: [...state.messagesOut, newMessage]
            }

        default:
            return state;
    }

}

type AddMessageType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export const addMessage = (newMessageText: string): AddMessageType => ({type: SEND_MESSAGE, newMessageText})

export default messagesReducer;