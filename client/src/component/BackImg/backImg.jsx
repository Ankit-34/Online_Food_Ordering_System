import React from "react";
import "../../CSS/backImg.css";
// import { Link } from "react-router-dom";

const link =
  "https://t4.ftcdn.net/jpg/02/94/21/87/360_F_294218701_se4mQtVmQoPnG4UX7J8PjvTzn8yeWyqF.jpg";

const BackImg = () => {
  return (
    <>
      <img className='out' src={link} alt='Back' />
        <div className='in'></div>
      {/* <h1>fnjhkud</h1> */}
      {/* <Link><li>rfhhgkjernkr</li></Link> */}
    </>
  );
};

export default BackImg;
