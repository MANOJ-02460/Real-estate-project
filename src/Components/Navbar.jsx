import React from 'react'

import {Link} from 'react-router-dom'

import logo from '../Images/Logo.png'

const navbar = [
  {name:"Home", path:"#home"},
  {name:"About", path:"#about"},
  {name:"Agents", path:"#agents"},
  {name:"Property", path:"#property"},
  {name:"Contact", path:"#contact"}
]
const Navbar = () => {
  return (
    <nav>
        <a href='#' className='logo'>
            <img src={logo} alt='Logo '/>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul>
            
			<li><Link to="/">Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/agent'>Agents</Link></li>
            <li><Link to='/property'>Property</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

        </ul>
        {/* <ul>
          {navbar.map((x,i)=>{
            return(
              <li key={i}><a href={x.path}>{x.name}</a></li>
            )
          })}

        </ul> */}
        <a href='#' className='property'>Properties</a>
    </nav>
  )
}

export default Navbar