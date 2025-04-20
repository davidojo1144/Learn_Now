import React, { forwardRef } from 'react'
import { assets } from '../assets/assets'


const HowItWorks = forwardRef((props, ref) => {
  return (
    <>
    <div ref={ref} className='bg-blue-100 pt-2 md:mt-20 mt-96 mb-20 pb-10'>
      <div className='container pt-20 pb-10 space-y-8'>
        <div className='text-center max-w-md mx-auto md:space-y-5'>  
            <h1 className='md:text-2xl text-xl prata-regular font-bold'>How It Works</h1>
            <p className='text-sm px-4'>
            Learn effortlessly—sign up, choose your path, and grow at your pace. Track progress, enjoy the journey.
            </p>
        </div>
        <div className='flex justify-evenly  text-center items-center md:flex-row flex-col space-y-6 md:space-y-0 '>
            <div>
                <img className='w-32 ml-14' src={assets.signup} alt="" />
                <p className='font-medium text-xl '>Sign Up</p>
                <p>Sign up in seconds and start learning.</p>
            </div>
            <div>
                <img className='w-44' src={assets.lesson} alt="" />
                <p className='font-medium text-xl '>Pick Up Your Lessons</p>
                <p>Choose lessons that fit your goals</p>
            </div>
            <div>
                <img className='w-44' src={assets.learning} alt="" />
                <p className='font-medium text-xl'>Start Learning</p>
                <p>Start learning right away.</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
})

export default HowItWorks
