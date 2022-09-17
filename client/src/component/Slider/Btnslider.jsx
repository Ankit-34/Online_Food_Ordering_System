import React from 'react';
import left from '../../Icon/left_arroe.png';
import right from '../../Icon/right_arroe.png';

const Btnslider = (props) => {
    return <>
        <button
            onClick={props.moveSlide}
        className={props.direction==='next' ? 'btn-slide next' : 'btn-slide prev'}>
            <img src={props.direction==='next' ? right : left} alt='left_img'></img>
        </button>
    </>
}

export default Btnslider; 