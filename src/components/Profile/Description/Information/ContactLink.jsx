import React from "react";

const ContactLink = ({link, text}) => {
    return (
            <a href={link} target="_blank" rel="noreferrer" >
              {text},{" "}
            </a>
    );
};

export default ContactLink;