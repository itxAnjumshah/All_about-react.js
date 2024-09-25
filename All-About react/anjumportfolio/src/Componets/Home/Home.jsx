import React from "react";
import "./Home.css";
import right_img from "../Assets/logo-png.png";

export default function Home() {
  return (
    <div id="home">
      <div className="left">
        <p>
          Hello It'x<span>ANJUM SHAH</span>
        </p>
        <h1>FULL-STACK DEVELOPER</h1>
      </div>
      <div className="right">
        <img src={right_img} alt="Anjum Shah" />
      </div>
    </div>
  );
}
