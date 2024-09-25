import React, { useRef } from "react";
import "./Testimoniols.css";
import back_btn from "../.././assets/download (5).png";
import image1 from "../.././assets/user-1-dp2DpvM_.png";
import image2 from "../.././assets/user-2-UK2CIdqi.png";
import image3 from "../.././assets/user-3-BHRQSl0V.png";
import image4 from "../.././assets/user-4-njZdDe5j.png";
import next_btn from "../.././assets/download (6).png";

export default function Testimoniols() {

const slider =useRef();
let tx=0;


const slideForward =()=>{
if(tx > -50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;

}
const slideBackward =()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}


  return (
    <div className="testimoniols">
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={image1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={image2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={image3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={image4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
