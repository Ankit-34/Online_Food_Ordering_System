import React from 'react';
import Img from './scheduleImg.jpg';
import './schedule.css';

const Schedule = () => {
    return (
      <>
        <div className="opening_hours">
          <div className="left_side">
            <img src={Img} alt="Schedule_Img" />
          </div>

          <div className="right_side">
            <div>
                <h2>Opening Timings</h2>
            </div>
            <ul className="table">
              <li>
                <span>Saturday:</span>
                <p className="pull-right">9.30 am - 11.30 pm</p>
              </li>
              <li>
                <span>Sunday:</span>
                <p className="pull-right">9.30 am - 11.30 pm</p>
              </li>
              <li>
                <span>Monday:</span>
                <p className="pull-right">9.30 am - 11.30 pm</p>
              </li>
              <li>
                <span>Tuesday:</span>
                <p className="pull-right">9.30 am - 11.30 pm</p>
              </li>
              <li>
                <span>Wednesday:</span>
                <p className="pull-right">9.30 am - 1.30 pm</p>
              </li>
              <li>
                <span>Thusday:</span>
                <p className="pull-right">9.30 am - 10.00 pm</p>
              </li>
              <li>
                <span>Friday:</span>
                <p className="pull-right">10.30 am - 12.00 pm</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Schedule;