import React from 'react'
import Navbar from './Navbar'
import aboutImage from '../Images/About.png'

const About = () => {
  return (
    <div className='about' id="about">
        <Navbar/>
        <div className='about-model'>
            <img src={aboutImage} alt='about-image'/>
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br/> Real Estate Company</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptate est dolor quos similique quasi illum beatae, eaque facere quibusdam.</p>
            <button>View More Button</button>
        </div>
    </div>
  )
}

export default About