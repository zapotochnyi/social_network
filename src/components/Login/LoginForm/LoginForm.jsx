import React from 'react';
import {Field} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";

const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Email'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} type={'password'} name={'password'} placeholder={'Password'}
                       validate={[required, minLength8]}/>
            </div>
            <div>
                <Field component={Input} type={'checkbox'} name={'rememberMe'}/>Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm;