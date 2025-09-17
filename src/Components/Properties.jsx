import React from 'react'
import Propertiesbox from './Propertiesbox'
import propertyImage1 from '../Images/property1.png'
import propertyImage2 from '../Images/property2.png'
import propertyImage3 from '../Images/property3.png'
import Navbar from './Navbar'

const Properties = () => {
  return (
    <>
    <Navbar/>
    <div className='product' id='property'>
        <div className='p-heading'>
            <h3>Properties </h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='product-container'>
              <Propertiesbox image={propertyImage1} name="RichMond" price="50L"/>
              <Propertiesbox image={propertyImage2} name="RichMond" price="75L"/>
              <Propertiesbox image={propertyImage3} name="RichMond" price="89L"/>
        </div>
    </div>
    </>
  )
}

export default Properties