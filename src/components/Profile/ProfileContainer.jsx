import React from 'react';
import {
    addPost,
    getProfile,
    getUserStatus,
    newPostText,
    setUserProfile,
    updateUserStatus
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        //todo what a fuck with userId and withRouter
        debugger
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <>
            {!this.props.profile.profileInfo ? <Preloader/> :
                <Profile {...this.props} profileInfo={this.props.profile.profileInfo}
                         status={this.props.profile.status}/>}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default compose(
    connect(mapStateToProps, {addPost, newPostText, setUserProfile, getProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);