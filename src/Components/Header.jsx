import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='header' id='home'>
        <Navbar/>
        <div className='intro'>
            <p>Looking for a Property!</p>
            <h1><span>Buy</span>and<span>Sell</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, fugiat obcaecati laborum sunt distinctio molestiae. Dicta mollitia debitis aut. Nostrum.</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header