import React, {useState} from 'react';
import dish1 from "../ItemCard/dish1-modified.png";

const Card = (props) => {

    const [func, setFunc] = useState('active');

    setInterval(() => {
        if (props.this === 'oddOne') {
            if (window.innerWidth <= 1000 && window.innerWidth>760)
                setFunc('active');
            else setFunc('block');
        }
    }, 500)

      return (
        // (props.this === 'reguler') ?
        <>
              <div className={`best_dishes ${func}`}>
            <div className="ImgOuter">
              <img src={dish1} alt="" />
            </div>
            <div className="item_data">
              <p className="item_name">Product_Name</p>
              <hr />
              <p className="item_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                dolorum vitae totam quibusdam natus placeat? Neque, ab
                blanditiis
              </p>
              <p className="item_price">Product Price</p>
              <button>Add to cart</button>
            </div>
          </div>
        </>
        );
}

export default Card;