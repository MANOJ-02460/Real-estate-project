import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import HowItWorks from './Components/HowItWorks'
import About from './Components/About'
import Agent from './Components/Agent'
import Properties from './Components/Properties'
import Contact from './Components/Contact'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/' element={<HowItWorks/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/agent' element={<Agent/>}/>
        <Route path='/property' element={<Properties/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
