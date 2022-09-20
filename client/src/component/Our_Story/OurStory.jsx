import React from 'react';
import Img from './storyImg.jpg';
import './Our_story.css';

const OurStory = () => {
    return (
      <>
        <div className="our_story_container">
          <div className="story">
            <div>
              <h2>Our Story</h2>
            </div>
            <p>
              This project aims to create online restaurant menu system which is
              need of the hour in corona times.User can login into the website
              using phone number/e-mail. Photographs of food items are available
              in the menu and site has varied other facilities like add to cart,
              view cart, customize food item, place order, cancel order etc..
            </p>
          </div>

          <div className="storyImg">
            <img src={Img} alt="Story Img" />
          </div>
        </div>
      </>
    );
}

export default OurStory;