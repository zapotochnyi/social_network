import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            <div className={s.status_wrapper}>
                {!this.state.editMode ?
                    <span onClick={this.activateEditMode}>{this.props.status || 'there will be status'}</span> :

                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>}
            </div>
        </>
    }
}

export default ProfileStatus;