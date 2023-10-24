import React from 'react'
import Features from './Features'
import Button, { YellowButton } from '../Button'

export default function Home() {
  return (
    <div>
        <hero>
            <div className=' flex justify-center mt-[10vh] p-3'>
                <div className='text p-4' >
                    <div className='w-[35vw]'>
                        <p className='text-3xl m-2 text-indigo-500'>Welcome To Bankers</p>
                        <h1 className='text-7xl m-2'>Fast and simple</h1>
                        <h1 className='text-7xl text-purple-400 m-2'>digital payment</h1>
                        <h1 className='text-7xl m-2'>solution</h1>
                        <p className='m-4 text-gray-400 text-xl font-semibold'>Enjoy making transction and integrating all your financial needs only with ouer bank </p>
                    </div>
                    <div className='ml-5 flex gap-7'>
                        <Button text="Play Store"/>
                        <Button text="App Store"/>
                    </div>
                    
                </div>
                <div className='img'>
                    <img src="./assets/Hero-1.webp" alt="hero-img" height="500px" width="500px" />
                </div>
            </div>
      </hero>

      <achivement>
      <div className='flex justify-center gap-40 text-center p-10 mt-5 font-semibold text-xl bg-indigo-500 text-white'>
                <div className="div-1">
                    <h1>100+</h1>
                    <h3>Daily Signup</h3>
                </div>
                <div className="div-2">
                    <h1>60K+</h1>
                    <h3>Active members</h3>
                </div>
                <div className="div-3">
                    <h1>1K</h1>
                    <h3>Daily Transaction</h3>
                </div>
                <div className="div-4">
                    <h1>4.3</h1>
                    <h3>App Rating</h3>
                </div>
            </div>
      </achivement>

      <about>
        <div className='flex justify-center mt-10 p-5 gap-10'>
            <div className='img'>
                <img src="./assets/About.webp" alt="about" />
            </div>
            <div className='content p-5 m-5 w-[30vw]'>
                <div className='text'>
                    <h4 className='text-lg text-indigo-500 font-semibold ml-5'>Anytime Anyewhere</h4>
                    <h1 className='text-5xl font-semibold m-3'>An easy trancsaction can be anywhere at anytime</h1>
                    <p className='text-lg text-gray-500 m-5'>Enjoy making tranascaction and integrating all your financial needs only with our mobile banking</p>
                </div>
                <div className='ml-10'>
                    <Button text="Learn more"/>
                </div>
            </div>
        </div>
      </about>

      <features>
        <Features />
      </features>

      <testimonial>
      <div className='text-center p-5 mt-10'>
            <p className='text-base font-bold text-indigo-500'>TESTEMONIAL</p>
            <h1 className='text-5xl font-semibold m-5'>Trusted More than 120K active user</h1>
            <div className='text-lg text-gray-500'>
              <p>Enjoy making trnsaction, and interogating all ypur financial</p>
              <p>needs only with our mobile banking</p>
            </div>
      </div> 
      </testimonial>

      <askquestion>
            <div className='flex p-5 justify-center bg-indigo-500 mt-10'>
                    <div className='text m-5 p-5 w-[40vw]' >
                        <h1 className='text-5xl font-semibold m-5 text-white'>Still Have Questions?</h1>
                        <p className='m-6 text-gray-300'>Join our whishlist to request a demo app if you still have questions</p>
                        <YellowButton text="Ask Here"/>
                    </div>

                    <div className='img'>
                        <img src="./assets/Bottom.webp"alt=""  height='300px' width="300px"/>
                    </div>
            </div>
      </askquestion>
    </div>
  )
}
