import React from "react";

const ContactLink = ({ link, title }) => {
  return (
    <>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          {title},{" "}
        </a>
      )}
    </>
  );
};

export default ContactLink;
