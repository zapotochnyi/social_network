import React from "react";
import ContactLink from "./ContactLink";
import s from "./Information.module.css";

const Information = ({
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  facebook,
  vk,
  twitter,
  instagram,
  github,
}) => {
  return (
    <div className={s.information}>
      <div className={s.item}>{aboutMe}</div>

      <div className={s.item}>
        {lookingForAJob ? <span>{lookingForAJobDescription}</span> : null}
      </div>

      <div className={s.item}>
        {facebook && <ContactLink link={facebook} text="facebook" />}
        {vk && <ContactLink link={vk} text="vk" />}
        {twitter && <ContactLink link={twitter} text="twitter" />}
        {instagram && <ContactLink link={instagram} text="instagram" />}
        {github && <ContactLink link={github} text="github" />}
      </div>
    </div>
  );
};

export default Information;
