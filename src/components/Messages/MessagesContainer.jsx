import React from 'react';
import Messages from "./Messages";
import {addMessage, newMessageText} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
//todo HOC for redirect
class MessagesContainer extends React.Component {
    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>
        return <Messages messages={this.props.messages}/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {addMessage, newMessageText}) (MessagesContainer);