import React from 'react';
import links from '../../Data/Features_Img.js';
import './Features.css';

const Features = () => {
    return <>
        <div class="feature_container">
        {
            links.map((link) => {
                return<>    
                <div className="Feature">
                    <img src={link.image} alt='Features' />
                    <b>{link.title}</b>
                    <hr />
                    <p>{link.desc}</p>
                </div>
                </>
            })
        }   
        </div>
    </>

}

export default Features;