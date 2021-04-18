import React from 'react';
import {connect} from "react-redux";
import {
    followUser,
    getUsers,
    setCurrentPage,
    toggleButtonDisable,
    unfollowUser
} from "../../redux/usersReducer";
import UsersPage from "./UsersPage/UsersPage";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (currentPage) => {

        this.props.setCurrentPage(currentPage);
        this.props.getUsers(this.props.pageSize, currentPage);
    }

    render() {

        return <>
            {
                this.props.isFetching ? <Preloader/> : <UsersPage users={this.props.users}
                                                                  totalUsersCount={this.props.totalUsersCount}
                                                                  pageSize={this.props.pageSize}
                                                                  currentPage={this.props.currentPage}
                                                                  followUser={this.props.followUser}
                                                                  unfollowUser={this.props.unfollowUser}
                                                                  onPageChanged={this.onPageChanged}
                                                                  buttonDisableInProgress={this.props.buttonDisableInProgress}
                />
            }
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        buttonDisableInProgress: state.usersPage.buttonDisableInProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        toggleButtonDisable,
        getUsers,
        followUser,
        unfollowUser
    }),
    withAuthRedirect
)(UsersContainer);