import React from 'react'
import './hero.css'
import UIR from '../../assets/UIR.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Build your universe one world at a time.</h1>
            <p>Here is where you can keep track of every aspect of your universe.</p>
            <button className='btn'>GET STARTED <img src={UIR} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
