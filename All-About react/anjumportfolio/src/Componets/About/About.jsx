import React from 'react'
import "./Aboutstyle.css";
import Ewarenet_img from "../Assets/eware_img.webp"
export default function About() {
  return (
    <div className='about'>
<div className="about-left">
    <img src={Ewarenet_img} alt="" />
</div>
<div className="about-right">
    <h1>About-ME </h1>
    <p>Anjum Shah is an accomplished Full-Stack Developer with over 4 years of hands-on experience in delivering comprehensive web solutions. Proficient in both front-end and back-end development, I leverage a diverse set of technologies to create robust, scalable applications. A collaborative team player, I excel at working closely with cross-functional teams to deliver effective technical solutions and maintain optimal development environments. Strong problem-solving abilities and a proven track record of driving technical excellence to support organizations in achieving their goals.</p>

</div>
      
    </div>
  )
}
