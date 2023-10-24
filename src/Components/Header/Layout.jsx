import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../Home/Home'

export default function Layout() {
  return (
    <div className='overflow-hidden'>
        <div className='flex justify-center '>
          <header>
              <Navbar/>
              <Home/>
              <Footer/>
          </header>
            
        </div>
        
    </div>
  )
}
