/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
   <section id="footer">
      <div className="container footer">
         <div className="quick-access">
            <h4>لینک های مفید</h4>
            <div className="footer-links">
            <a href="#">&bull; پشتیبانی</a>
            <a href="#">&bull; درباره ما</a>
            <a href="#">&bull; آموزش</a>
            <a href="#">&bull; هاستینگ</a>
            <a href="#">&bull; پیام رسان</a>
            </div>
         </div>
         <div className="support">
          <h4>پشتیبانی</h4>
          <div className="footer-links">
            <a href="#">&bull; پشتیبانی</a>
            <a href="#">&bull; درباره ما</a>
            <a href="#">&bull; آموزش</a>
            <a href="#">&bull; هاستینگ</a>
            <a href="#">&bull; پیام رسان</a>
          </div>
        </div>
        <div className="contact">
          <h4>راه های ارتباطی</h4>
          <div className="footer-contact">
          <p><FaMapMarkerAlt /> &nbsp;آٔدرس:پرند - فاز ۴</p>
          <p><FaPhoneAlt /> &nbsp; تلفن : 09181111111 </p>
            <p> <FaFax /> &nbsp; فکس : 0989111111111</p>
            <p> <FaEnvelope /> &nbsp; ایمیل : ashkan.mataee@yahoo.com</p>
            <p><FaGlobe /> &nbsp; وبسایت : ashkan2021.gigfa.com</p>

            </div>
          </div>
          <div className="logo">
          <p className='logo-text'>
          Ashkan
          <span>m</span>
        </p>
          </div>
      </div>
   </section> 
  );
};

export default Footer;
