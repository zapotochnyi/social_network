import React from "react";
import s from "./FormControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ input, meta: {touched, error}, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={s.form_control + " " + (hasError ? s.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  component,
  name,
  placeholder,
  validators,
  props = {},
  text = ""
) => (
  <div>
    <Field
      component={component}
      name={name}
      placeholder={placeholder}
      validate={validators}
      {...props}
    />{" "}
    {text}
  </div>
);
