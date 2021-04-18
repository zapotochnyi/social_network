import React from 'react';
import {addPost, getProfile, newPostText, setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.getProfile(userId);
    }

    render() {
//todo preloader for all request

        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <>
            {!this.props.profile.profileInfo ? <Preloader/> :
                <Profile {...this.props} profileInfo={this.props.profile.profileInfo}/>}
        </>

    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        isAuth: state.auth.isAuth
    }
}

const WithRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {addPost, newPostText, setUserProfile, getProfile})(WithRouterProfileContainer);