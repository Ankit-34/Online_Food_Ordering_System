import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <>
        <div className="Footer">
            <hr />
            <div className="lower">
              <section>
                <img
                  src="https://openclipart.org/download/284282/publicdomainq-0009896wneoay.svg"
                  alt=""
                ></img>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                {/* <p className='follow'></p> */}
                <div className="icons">
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-linkedin"></i>
                </div>
              </section>
              <div className="upper">
              <div className="call_us">
                <i class="bi bi-telephone"></i>
                <div className="call_outer">
                  <p>Call Us</p>
                  <p>+91 928-43-56712</p>
                </div>
              </div>
              <div className="mail_us">
                <i class="bi bi-envelope"></i>
                <div className="mail_outer">
                  <p>Mail Us</p>
                  <p>contect.info@gmail.com</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      </>
    );
}

export default Footer;