import React from "react";
import "./Homstyle.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero_banner from "../../assets/hero_banner.jpg"
import Hero_tittle from "../../assets/hero_title.png";
import Play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png"
import Tittlecard from "../../Components/TittleCards/Tittlecard";
import Footer from "../../Components/Footer/Footer";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={Hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={Hero_tittle} alt="" className="caption-img" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            et perferendis praesentium doloremque facilis inventore vel
            reiciendis! Ea quia aspernatur consectetur perferendis delectus
            sunt? Qui vero unde modi eveniet illum.
          </p>
          <div className="hero-btn">
            <button className="btn"><img src={Play_icon} alt="" />play</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More Info</button>
          </div>
          <Tittlecard/>
        </div>
      </div>
      <div className="more-cards">
      <Tittlecard title={"Blockbuster Movies"} category={"top_rated"}/>
      <Tittlecard title={"only on netflix"}  category={"popular"} />
      <Tittlecard title={"Upcoming"} category={"upcoming"}/>
      <Tittlecard  title={"Top pics for  you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
