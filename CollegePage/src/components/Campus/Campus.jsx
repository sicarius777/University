import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/Band.jpg'
import gallery_2 from '../../assets/Dday.jpg'
import gallery_3 from '../../assets/Band2.jpg'
import gallery_4 from '../../assets/kingswyld.jpg'
import white-arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src=
      {red_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
