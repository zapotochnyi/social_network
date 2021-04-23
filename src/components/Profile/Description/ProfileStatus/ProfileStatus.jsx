import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () =>  {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <>
            <div className={s.status_wrapper}>
                {!this.state.editMode ?
                    <span onClick={this.activateEditMode}>{this.props.status}</span> :

                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>}
            </div>
        </>
    }
}

export default ProfileStatus;