import React from 'react';
import Messages from "./Messages";
import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/messagesReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },

        newMessageText: (text) => {
            let action = newMessageTextActionCreator(text);
            dispatch(action);
        }

    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;