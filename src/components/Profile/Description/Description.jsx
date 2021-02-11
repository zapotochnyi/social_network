import React from 'react';
import c from './Description.module.css';
import Information from "./Information/Information";
import Avatar from "./Avatar/Avatar";

const Description = (props) => {
    let informationElement = props.information
        .map(i => (<Information name={i.name} date={i.date} city={i.city}
                                education={i.education} web={i.web}/>))

    let avatarElement = props.avatars.map(a => (<Avatar src={a.src} alt={a.alt}/>))


    return (
        <div className={c.description}>
            {avatarElement}
            {informationElement}
        </div>
    )
}

export default Description;