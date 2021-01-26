import React from 'react';
import c from './Description.module.css';

const Description = () =>{
    return(
        <div className={c.description}>
            <div className={c.avatar}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-OX8ltKbi4MdCQa9BeV8l_36Z76lF4Qjeg&usqp=CAU"
                    alt=""/>
            </div>
            <div className={c.information}>
                <h2>Backa Kartoflyanuy</h2>
                <p className={c.item}>Date of birth: 15.05.1999</p>
                <p className={c.item}>City: Tokyo</p>
                <p className={c.item}>Education: LNU</p>
                <p className={c.item}>Web Site: @elina</p>
            </div>
        </div>
    )
}

export default Description;