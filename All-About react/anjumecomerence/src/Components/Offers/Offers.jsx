import React from 'react';
import "./Offerstyle.css";
import Exculsive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive </h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SALLERS PRODUCTS </p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={Exculsive_img} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
