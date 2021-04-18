import React from 'react';
import s from './Preloader.module.css'
import preloader from './../../../assets/images/loading1.gif'

const Preloader = (props) => {
    return (
        <div className={s.preloader_wrap}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;