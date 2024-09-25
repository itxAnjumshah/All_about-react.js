import React from 'react';
import "./mystyle.css";
import Icon_1 from "../Assets/icon-1.png";
import icon_2 from "../Assets/icon-2.png";
import icon_3 from "../Assets/icon-4.png";
import icon_4 from "../Assets/icon-7.png"

export default function Myservice() {
  return (
    <div className='services'>
        <div className='service-left'>
           <h1> MY<span>Services</span> </h1>
            
        </div>
      <div className="service-right">
        <div className="rounded-circle">
            <img src={Icon_1} alt=""  className='rounded-img'/>
            <p>web development</p>
        </div>
        <div className="rounded-circle">
            <img src={icon_2} alt="" className='rounded-img' />
            <p>Web Hosting</p>
        </div>
        <div className="rounded-circle">
            <img src={icon_3} alt=""  className='rounded-img'/>
<p>Error solving</p>
        </div>
        <div className="rounded-circle">
            <img src={icon_4} alt="" className='rounded-img' />
            <p>Full stack devloper</p>
        </div>

      </div>
    </div>
  )
}
