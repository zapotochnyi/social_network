import { getAuthUserData } from './authReducer';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'; 

let initialState = {
    initialized: false
};

export let InitialStateType = typeof initialState;

const appReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

            default:
                return state;
    };
};

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});
//todo types of promises
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;