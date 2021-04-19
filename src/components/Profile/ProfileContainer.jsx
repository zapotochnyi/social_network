import React from 'react';
import {addPost, getProfile, newPostText, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
//todo preloader for all request

        return <>
            {!this.props.profile.profileInfo ? <Preloader/> :
                <Profile {...this.props} profileInfo={this.props.profile.profileInfo}/>}
        </>

    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
    }
}

export default compose(
    connect(mapStateToProps, {addPost, newPostText, setUserProfile, getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);