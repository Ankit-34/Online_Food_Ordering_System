import React from 'react';
import '../../CSS/popup.css';
const Popup = (props) => {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <p className='title'>{props.title}</p>
                <button className='close-btn' onClick={()=>props.setTrigger(false)}> ❎ </button>
                {props.children}
            </div>
        </div>
    ) : " ";
}

export default Popup;