import React from 'react';
import c from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";


const Dialogs = (props) => {

    let dialogElement = props.dialogs.map(d => (<Dialog avatar={d.avatar} name={d.name} id={d.id}/>))

    return (
        <div className={c.dialogs}>

            {dialogElement}
        </div>
    )

}

export default Dialogs;