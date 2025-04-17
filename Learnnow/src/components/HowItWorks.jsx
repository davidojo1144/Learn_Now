import React, { forwardRef } from 'react'


const HowItWorks = forwardRef((props, ref) => {
  return (
    <>
    <div className='bg-blue-100 pt-2 mt-20'>
      <div className='container pt-20 pb-10 space-y-8'>
        <div className='text-center max-w-md mx-auto md:space-y-5'>  
            <h1 ref={ref} className='md:text-2xl text-xl prata-regular'>How It Works</h1>
            <p className='text-sm px-4'>
            Learn effortlessly—sign up, choose your path, and grow at your pace. Track progress, enjoy the journey.
            </p>
        </div>
        <div className='flex justify-evenly items-center md:flex-row flex-col space-y-6 md:space-y-0 '>
            <div>
                <img src="" alt="" />
                <p>Sign Up</p>
                <p></p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Pick Up Your Lessons</p>
                <p></p>
            </div>
            <div>
                <img src="" alt="" />
                <p>Start Learning</p>
                <p></p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
})

export default HowItWorks
