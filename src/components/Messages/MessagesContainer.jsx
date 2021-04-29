import React from 'react';
import Messages from "./Messages";
import {addMessage} from "../../redux/messagesReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class MessagesContainer extends React.Component {
    render() {
        return <Messages {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(MessagesContainer);