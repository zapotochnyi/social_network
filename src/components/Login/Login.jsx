import React from 'react';
import LoginForm from "./LoginForm/LoginForm";
import {reduxForm} from "redux-form";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
//todo formData into ajax request for real login
const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;