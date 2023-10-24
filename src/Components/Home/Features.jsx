import React from 'react'
import { features, features2 } from '../Data'
import Button from '../Button'
import { BsArrowRight } from 'react-icons/bs';

export default function Features() {
  return (
    <div>
        <div>
            <div className='feature p-5 mt-10 text-center mb-5'>
                <p className='text-base font-bold text-indigo-500'>FEATURES</p>
                <h1 className='text-5xl font-semibold m-5'>Best Company to trust on Financial</h1>
                <p className='text-lg text-gray-500'>Enjoy Making transaction and integrating all your financial</p>
                <p className='text-lg text-gray-500'>Needs only with our mobile banking</p>
            </div>

            <div className='featurecard flex justify-center'>
                {
                    features.map((item, key) =>{
                        return(
                            <div className='border-2 m-3 p-3 py-5 w-[20vw] rounded-2xl hover:border-indigo-400 transition duration-300 ease-in-out'>
                                <div className='bg-gray-300 w-[1.8vw] rounded-full p-1.5 ml-5'>
                                    {item.icon}   
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-xl font-semibold m-3'>{item.title}</h1>
                                    <p className='text-base m-3 text-gray-500'>{item.discription}</p>
                                </div>
                                <div className='ml-3'><Button text="Learn more"/></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        {/* Feature 2 start here */}

        <div className='flex justify-center p-10 mt-10'>
            <div className='right-f m-3 p-5 w-[30vw]'>
                <div>
                    <p className='font-semibold uppercase text-indigo-500 m-2'>What you need to know</p>
                    <div className='text-4xl font-semibold m-3'>
                        <h1 >We provide the best value</h1>
                        <h1>for Your Future</h1>
                        <h1>Financial plans</h1>
                    </div>
                
                    <p className='m-4 text-gray-500'>Enjoy Making transaction and interogating all your financial needs only with our mobile marketing</p>
                </div>
                
                <button className='ml-5'>Learn More</button>
            </div>

            <div className='left-f'>
                {
                    features2.map((item)=>{
                        return(
                            <div className='border-2 m-3 p-3 py-5 w-[31vw] rounded-2xl flex hover:border-indigo-400 transition duration-300 ease-in-out'>
                                <div className='img bg-gray-300 h-[3.4vh] w-[1.8vw] rounded-full p-1.5 m-3'> {item.icon}</div>

                                <div className='text text-left mx-2'>
                                    <div className='title text-xl font-semibold'> {item.title}</div>
                                    
                                    <div className='descp text-sm text-gray-500'>{item.discription}</div>
                                </div>

                                <div className='btn ml-auto mt-2'>
                                    <button><BsArrowRight  className='text-2xl mt-2 mr-4 text-indigo-500' /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
