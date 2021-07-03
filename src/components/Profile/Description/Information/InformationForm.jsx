import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../../common/FormControls/FormControls";
import s from "./InformationForm.module.css";

const InformationForm = ({ onSubmit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.form_item}>
        <b>Full name: </b>
        {createField(Input, "fullName", "Full name", [])}
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

      <div>
        <button>Save</button>
      </div>

      {/* <div className={s.item}>
        <b>Contacts: </b>
        {Object.keys(contacts).map((key) => {
          return <ContactLink key={key} link={contacts[key]} title={key} />;
        })}
      </div> */}
    </form>
  );
};

const InformationFormReduxForm = reduxForm({
  form: "edit-profile-information",
})(InformationForm);

export default InformationFormReduxForm;
