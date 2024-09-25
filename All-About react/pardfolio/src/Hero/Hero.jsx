import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id='herocontainer'>
      <div className="hero" data-aos="fade-up-right">
        <div className="hero-img">
          <img src="https://demo.bravisthemes.com/promotors/wp-content/uploads/2023/07/home1-bg-01.png" alt="" />
        </div>
       
      </div>
    </div>
  );
}
