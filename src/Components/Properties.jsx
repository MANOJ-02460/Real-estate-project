import React from 'react'
import PropertiesBox from './PropertiesBox'
import propertyImage1 from '../Images/property1.png'
import propertyImage2 from '../Images/property2.png'
import propertyImage3 from '../Images/property3.png'

const Properties = () => {
  return (
    <div className='product'>
        <div className='p-heading'>
            <h3>Properties </h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='product-container'>
              <PropertiesBox image={propertyImage1} name="RichMond" price="50L"/>
              <PropertiesBox image={propertyImage2} name="RichMond" price="75L"/>
              <PropertiesBox image={propertyImage3} name="RichMond" price="89L"/>
        </div>
    </div>
  )
}

export default Properties