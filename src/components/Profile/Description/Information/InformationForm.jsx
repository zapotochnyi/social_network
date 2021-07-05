import React from "react";
import { reduxForm } from "redux-form";
import {
  maxLengthCreator,
  minLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormControls/FormControls";
import s from "./InformationForm.module.css";

const minLength5 = minLengthCreator(5);
const maxLength20 = maxLengthCreator(20);

const InformationForm = ({ onSubmit, handleSubmit, contacts, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.form_wrapper}>
      <div>
        <div className={s.form_item}>
          <b>Full name: </b>
          {createField(Input, "fullName", "Full name", [
            required,
            minLength5,
            maxLength20,
          ])}
        </div>

        <div className={s.form_item}>
          <b>About me:</b>
          {createField(Textarea, "aboutMe", "About me", [])}
        </div>

        <div className={s.job_wrap + " " + s.form_item}>
          <div>
            {createField(Input, "lookingForAJob", "", [], { type: "checkbox" })}
          </div>
          <div>
            <b>Looking for a job: </b>
          </div>
        </div>

        <div className={s.form_item}>
          <b>My professional skills: </b>
          {createField(
            Textarea,
            "lookingForAJobDescription",
            "My professional skills",
            []
          )}
        </div>

        {error && (
          <div className={s.error_message}>
            <h3>{error}</h3>
          </div>
        )}

        <div>
          <button>Save</button>
        </div>
      </div>

      <div className={s.form_item + " " + s.contacts_item}>
        {Object.keys(contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}: {createField(Input, "contacts." + key, key, [])}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const InformationFormReduxForm = reduxForm({
  form: "edit-profile-information",
})(InformationForm);

export default InformationFormReduxForm;
