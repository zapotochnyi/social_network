import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserPhoto,} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
        this.props.setAuthUserPhoto(this.props.id);
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    login: state.auth.login,
    photo: state.auth.photo
})

export default connect(mapStateToProps, {getAuthUserData, setAuthUserPhoto, logout})(HeaderContainer);


