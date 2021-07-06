import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

class LoginContainer extends React.Component {
  onSubmit = (formData) => {
    console.log(formData);
    this.props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  render() {
    if (this.props.isAuth) return <Redirect to={"/profile"} />;
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={this.props.captchaUrl} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { login })(LoginContainer);
