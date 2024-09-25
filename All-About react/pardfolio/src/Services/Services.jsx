import React, { useEffect } from 'react'
import "./Services.css"
import Aos from 'aos';

export default function Services() {
useEffect(()=>{
  Aos.init({duration:3000});

},[]);


  return (
    <div className='services'   id='services'>
<h1  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Our Cars</h1>
<div className="contianer" data-aos="fade-in-out">
  <img  data-aos="flip-left"  src={"https://i.pinimg.com/474x/7a/ed/22/7aed22516460bdfb4fa6cd5b45c78f7a.jpg"} alt="" />
 <img  data-aos="flip-left"     src={"https://i.pinimg.com/236x/ce/4b/57/ce4b573d0f130c205217d607c3b8e81f.jpg"} alt="" />
 <img    data-aos="flip-left"    src={"https://i.pinimg.com/474x/a9/87/5b/a9875b9790c31819efbebb2d6656d8fe.jpg"} alt="" />
  
  <h1></h1>

</div>

    </div>
  )
}
