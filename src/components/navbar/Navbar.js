import React, { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

import './Navbar.css';

const Navbar = () => {
  const [showIcon , setShowIcon] = useState(false);

  const toggleMenu = () => {
    setShowIcon(!showIcon);
  }

  return (
    <nav className="navbar container">
      <div className="menu">
        <ul className="nav-links" id={showIcon ? "show-links-mobile" : "show-links-mobile-hide" }>
          <li><a href="" className="btn btn-dark">آموزش بیشتر</a></li>
          <li><a href="">خانه</a></li>
          <li><a href="">امکانات</a></li>
          <li><a href="">دانلود</a></li>
          <li><a href="">مشترک شوید</a></li>
        </ul>
      </div>
      <div className="logo">
        <p className='logo-text'>
          Ashkan
          <span>m</span>
        </p>
      </div>

      <div className="menu-icons" onClick={toggleMenu}>
        {
          showIcon ? 
          <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/>
          :
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} /> 
        }
      </div>
    </nav>
  );
};

export default Navbar;
