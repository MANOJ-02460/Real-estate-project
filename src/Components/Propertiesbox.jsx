import React from 'react'
import Properties from './Properties'

const Propertiesbox = (props) => {
  return (
    <div className='p-box'>
        <img src={props.image} alt='Product'/>
        <p>{props.name}</p>
        <a href='#' className='price'>{props.price}</a>
        <a href='#' className='buy-btn'>Add to Cart</a>
    </div>
  )
}

export default Propertiesbox