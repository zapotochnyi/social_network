import React from "react";
import {
  addPost,
  getProfile,
  getUserStatus,
  setUserProfile,
  updateUserStatus,
  savePhoto,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import Profile from "./Profile";
import Preloader from "../common/Preloader/Preloader";
import { withRouter } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getProfileSelector,
  getAuthorisedUserId,
  getIsAuth,
} from "../../redux/selectors/profileSelector";

class ProfileContainer extends React.Component {
  refreshProfile() {
    const { getProfile, getUserStatus, authorisedUserId } = this.props;

    let userId = this.props.match.params.userId
    if (!userId) userId = authorisedUserId;

    getProfile(userId);
    getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.refreshProfile();
    }
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <>
        {!this.props.profile.profileInfo ? (
          <Preloader />
        ) : (
          <Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profileInfo={this.props.profile.profileInfo}
            savePhoto={this.props.savePhoto}
            status={this.props.profile.status}
            updateUserStatus={this.props.updateUserStatus}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: getProfileSelector(state),
    authorisedUserId: getAuthorisedUserId(state),
    isAuth: getIsAuth(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    setUserProfile,
    getProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
