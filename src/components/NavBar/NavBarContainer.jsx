import React from 'react';
import {connect} from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state) => {
    return {
        navBar: state.navBar
    }
}

const mapDispacthToProps = (dispatch) => {
    return {

    }
}

const NavBarContainer = connect (mapStateToProps, mapDispacthToProps) (NavBar);

export default NavBarContainer;