import React, { useEffect } from "react";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);



  return (
    <>
    <div className="fixed-header">
      <nav className="navbar" data-aos="fade-down">
        <img
          data-aos="fade-right"
          className="logo"
          src="https://demo.bravisthemes.com/promotors/wp-content/uploads/2022/07/logo.png"
          alt="Logo"
        />
        <ul data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <li ><a href="#herocontainer"> Home</a></li>
          <li ><a href="#services"> Service </a></li>
          <li > <a href="#works"> Work </a></li>
          {/* <li >BLOG</li> */}
          <li >Contact</li>
        </ul>
        <div className="number" data-aos="fade-left">
          +9231286666666
        </div>
        <div className="hamburger">hamburger</div>
      </nav>
      </div>
    </>
  );
}
