import React from 'react';
import {Field} from "redux-form";
import {createField, Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import s from './LoginForm.module.css'

const maxLength50 = maxLengthCreator(50);
const minLength8 = minLengthCreator(8);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField(Input, 'email', 'Email', [required, maxLength50])}
            {createField(Input, 'password', 'Password', [required, minLength8], {type: 'password'})}
            {createField(Input, 'rememberMe', null, [], {type: 'checkbox'}, 'Remember Me')}
            
            {error && <div className={s.error_message}>
                <h3>{error}</h3>
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;