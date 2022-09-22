import React from 'react';
import './ItemCard.css';
import Card from '../Card/Card';

const ItemCard = () => {

    // const dish1="../ItemCard/dish1-modified.png";

    return (
      <>
        <div className="card-container">
          <div className="dish_title">
            <h2>Our Special Items</h2>
          </div>

          <div className="card_wrap">
            <Card this="reguler" />
            <Card this="reguler" />
            <Card this="reguler" />
            <Card this="oddOne" />
          </div>
        </div>
      </>
    );
}

export default ItemCard;