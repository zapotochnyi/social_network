import React from 'react';
import {Field} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field component={'input'} type={'checkbox'} name={'rememberMe'}/>Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;