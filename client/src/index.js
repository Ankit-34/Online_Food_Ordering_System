import React from 'react';
import ReactDOM from 'react-dom/client';
// import BackImg from './component/BackImg/backImg.jsx';
import Navbar from './component/NavBar/Navbar.jsx';
import Slider from './component/Slider/Slider.jsx';
// import 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Slider />

    <Navbar />

    <div className='hii'>

      sdfghj
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
