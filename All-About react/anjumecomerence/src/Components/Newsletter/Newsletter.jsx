import React from 'react';
import "./Newsletters.css";

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newletter and  stay  updated</p>
      <div>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
