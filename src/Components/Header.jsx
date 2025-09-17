import React from 'react'
import Navbar from './Navbar'
import HowItWorks from './HowItWorks'
import About from './About'
import Agent from './Agent'
import Properties from './Properties'
import Contact from './Contact'

const Header = () => {
  return (
    <>
    <div className='header' id='home'>
        <Navbar/>
        <div className='intro'>
            <p>Looking for a Property!</p>
            <h1><span>Buy</span>&nbsp;and&nbsp;<span>Sell</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, fugiat obcaecati laborum sunt distinctio molestiae. Dicta mollitia debitis aut. Nostrum.</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
    <HowItWorks/>
    <About/>
    <Agent/>
    <Properties/>
    <Contact/>
    </>
  )
}

export default Header