
import React from 'react'
import Button from '../Button'

export default function Navbar() {
  return (
    <div>
      <nav className=' p-3 w-[100vw]'>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='img'>
              <img src="assets/logo.png" alt="logo" height="120px" width="120px" />
          </div>
          <div className='link'>
            <ul className='flex gap-5 text-base font-semibold mt-2 poppins'>
              <li className='hover:text-indigo-500 cursor-pointer'>Home</li>
              <li className='hover:text-indigo-500 cursor-pointer'>Product</li>
              <li className='hover:text-indigo-500 cursor-pointer'>Feature</li>
              <li className='hover:text-indigo-500cursor-pointer'>Blog</li>
              <li className='hover:text-indigo-500 cursor-pointer'>Help</li>
            </ul>
          </div>
          <div>
           <Button text="Download App"/>
          </div>
        </div>
      </nav>
    </div>
  )
}
