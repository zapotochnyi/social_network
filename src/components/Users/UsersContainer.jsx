import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  requestUsers,
  setCurrentPage,
  toggleButtonDisable,
  unfollowUser,
} from "../../redux/usersReducer";
import UsersPage from "./UsersPage/UsersPage";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getButtonDisableInProgress,
  getPortionSize,
} from "../../redux/selectors/usersSelectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const { pageSize, currentPage } = this.props;
    this.props.requestUsers(pageSize, currentPage);
  }

  onPageChanged = (currentPage) => {
    const { setCurrentPage, requestUsers, pageSize } = this.props;
    setCurrentPage(currentPage);
    requestUsers(pageSize, currentPage);
  };

  render() {
    return (
      <>
        {
          <UsersPage
            users={this.props.users}
            isFetching={this.props.isFetching}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            onPageChanged={this.onPageChanged}
            buttonDisableInProgress={this.props.buttonDisableInProgress}
            portionSize={this.props.portionSize}
          />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    buttonDisableInProgress: getButtonDisableInProgress(state),
    portionSize: getPortionSize(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    toggleButtonDisable,
    requestUsers,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect
)(UsersContainer);
