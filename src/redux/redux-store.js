import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navBarReducer from "./navBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    navBar: navBarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;