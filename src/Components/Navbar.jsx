import React from 'react'

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
            <img src='https://uc7ee4221d7e828bbc2ae941254b.previews.dropboxusercontent.com/p/thumb/ACy8QXqHG0N-5ovm7mhLuJEvGD8VbzL3vDZPdOEH8vrxpgNp8e6FY0PddT_F5vzdP76tnAtYVKFhwxpdnwb-UP0_sl2fZh_RunsAgK4RIFWvncsRaCuKxIp0A_4qNd9bgajZo8gkAyYUOCaDZPdFlQiga7pUt-GywyEMXbb_Qn3wSBo-cxTB-vhTmkijoRpGAsB_Pbzlh_RrVx0whtAG6dQRravzo92a_rT09s3BjHgjKzA7_LnVBJOFDk8PrFN8PCpPZzl0cV8p2PlBj4cET43SMDwhb5yekHEV93GS1KpfClFIjynOCuN6Y0Nn_J3MCxtmYt0-eG0IDnZO1xbhjeL7/p.png' alt='Logo '/>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        {/* <ul>
            <li><a href="#home" className='active' >Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#property">Property</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul> */}
        <ul>
          {navbar.map((x,i)=>{
            return(
              <li key={i}><a href={x.path}>{x.name}</a></li>
            )
          })}

        </ul>
        <a href='#' className='property'>Properties</a>
    </nav>
  )
}

export default Navbar