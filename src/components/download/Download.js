/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLinux, FaWindows} from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import './Download.css';


function Download() {
  return (
    <section id="download">
     <div className="container download">
       <div className="download-title">
        <h2>دانلود اپلیکیشن ما</h2>
        <p>برنامه های ما برای دانلود در همه ی فروشگاه ها موجود است.</p>

       </div>
       <div className="download-apps">
         <div className="download-app">
            <FaLinux /> 
            <p>لینوکس</p>
         </div>
         <div className="download-app">
            <FaWindows /> 
            <p>ویندوز</p>
         </div>
         <div className="download-app">
            <GrAndroid /> 
            <p>اندروید</p>
         </div>
       </div>
     </div>
    </section>
  )
}

export default Download;
