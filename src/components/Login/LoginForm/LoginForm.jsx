import React from 'react';
import {Field} from "redux-form";
import {Input} from "../../common/FormControls/FormControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";

const maxLength15 = maxLengthCreator(15);
const minLength8 = minLengthCreator(8);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder={'Login'} validate={[required, maxLength15]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'Password'} validate={[required, minLength8]}/>
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