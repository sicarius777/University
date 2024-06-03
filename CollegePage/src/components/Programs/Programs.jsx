import React from 'react'
import './Programs.css'
import  Flora_1 from '../../assets/Flora_1.png'
import  Flora_2 from '../../assets/Flora_2.png'
import  Flora_3 from '../../assets/Flora_3.jpg'
import  Flora_4 from '../../assets/Flora_4.jpg'
import  Flora_5 from '../../assets/Flora_5.jpg'
import  logo from '../../assets/logo.png'

const Programs = () => {
  return (
    <div className='programs' name="Tools">
      <div className='program'>
        <img src={Flora_1} alt="" />
        <div className="caption">
            <img src={logo} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Flora_2} alt="" />
        <div className="caption">
            <img src={logo} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Flora_3} alt="" />
        <div className="caption">
            <img src={logo} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Flora_4} alt="" />
        <div className="caption">
            <img src={logo} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Flora_5} alt="" />
        <div className="caption">
            <img src={logo} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
