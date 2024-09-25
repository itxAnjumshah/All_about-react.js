import React from 'react'
import './Campus.css'
import gallery1 from '../.././assets/gallery-1-HP2uKW94.png'
import gallery2 from '../.././assets/gallery-2-DYatBGZh.png'
import gallery3 from '../.././assets/gallery-3-C4KpO1U2.png'
import gallery4 from '../.././assets/gallery-4-LJEJ329C.png'
import arrow from'../.././assets/download (3).png'

export default function Campus() {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
      <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
    </div>
  )
}
