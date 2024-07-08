import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Landingpage from './components/Landingpage'
import Marquee from './components/Marquee'
import Greencard from './components/Greencard'
import Object from './components/Object'

function App() {
  return (
    
    <div className='w-full h-screen text-white'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <Greencard/>
      <Object/>
    </div>
  
  )
}

export default App