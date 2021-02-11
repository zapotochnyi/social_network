import React from 'react';
import c from './Information.module.css';

const Information = (props) =>{


    return(
            <div className={c.information}>
                <h2>{props.name}</h2>
                <p className={c.item}>Date of birth: {props.date}</p>
                <p className={c.item}>City: {props.city}</p>
                <p className={c.item}>Education: {props.education}</p>
                <p className={c.item}>Web Site: {props.web}</p>
            </div>
    )
}

export default Information;