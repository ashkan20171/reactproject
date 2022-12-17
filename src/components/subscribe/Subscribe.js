/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Subscribe = () => {
  return (
    <section id="subscribe">
      <div className="container subscribe">
        <h2>حالا مشترک شوید!</h2>
        <form>
          <button>مشترک شوید</button>
          <input type="text" placeholder='ایمیل خود را وارد کنید ...' />
        </form>

        <div className="socials">
           <div className="social-icon">
              <FaInstagram />
           </div>
           <div className="social-icon">
              <FaTwitter />
           </div>
           <div className="social-icon">
              <FaFacebookF />
           </div>
           <div className="social-icon">            
              <TiSocialGooglePlus />              
           </div>
        </div>
      </div>
    </section>
  )
};

export default Subscribe;
