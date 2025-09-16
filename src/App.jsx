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

function App() {
  

  return (
    <>
      <Header/>
      <HowItWorks/>
      <About/>
      <Agent/>
      <Properties/>
      <Contact/>
      
    </>
  )
}

export default App
