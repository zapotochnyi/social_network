import React from 'react';
import {addPostActionCreator, newPostTextActionCreator} from "../../redux/profileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action)
        },

        newPostText: (text) => {
            let action = newPostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;