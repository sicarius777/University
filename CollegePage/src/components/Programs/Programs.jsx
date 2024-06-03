import React from 'react'
import './Programs.css'
import  Desk from '../../assets/Desk.jpg'
import  Grad1 from '../../assets/Grad1.png'
import  Grad2 from '../../assets/Grad2.jpg'
import  Study from '../../assets/Study.png'
import Hats from '../../assets/Grad_hat.png'

const Programs = () => {
  return (
    <div className='programs' name="Tools">
      <div className='program'>
        <img src={Desk} alt="" />
        <div className="caption">
            <img src={Study} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Grad1} alt="" />
        <div className="caption">
            <img src={Hats} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
      <div className='program'>
        <img src={Grad2} alt="" />
        <div className="caption">
            <img src={Hats} alt="" />
            <p>Placeholder</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
