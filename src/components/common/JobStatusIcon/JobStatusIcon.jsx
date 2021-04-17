import React from 'react';
import icon from './../../../assets/images/jobStatus.png'
import s from './JobStatusIcon.module.css'

const JobStatusIcon = () => {
    return <img className={s.icon} src={icon} />
}

export default JobStatusIcon;