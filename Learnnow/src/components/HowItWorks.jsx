import React, { forwardRef } from 'react'


const HowItWorks = forwardRef((props, ref) => {
  return (
    <>
    <div className='bg-blue-100 pt-2 md:mt-20 mt-96'>
      <div className='container pt-20 pb-10 space-y-8'>
        <div className='text-center max-w-md mx-auto md:space-y-5'>  
            <h1 ref={ref} className='md:text-2xl text-xl prata-regular font-bold'>How It Works</h1>
            <p className='text-sm px-4'>
            Learn effortlessly—sign up, choose your path, and grow at your pace. Track progress, enjoy the journey.
            </p>
        </div>
        <div className='flex justify-evenly  text-center items-center md:flex-row flex-col space-y-6 md:space-y-0 '>
            <div>
                <img src="" alt="" />
                <p className='font-medium md:text-xl text-sm'>Sign Up</p>
                <p>Sign up in seconds and start learning.</p>
            </div>
            <div>
                <img src="" alt="" />
                <p className='font-medium md:text-xl text-sm'>Pick Up Your Lessons</p>
                <p>Choose lessons that fit your goals</p>
            </div>
            <div>
                <img src="" alt="" />
                <p className='font-medium md:text-xl text-sm'>Start Learning</p>
                <p>Start learning right away.</p>
            </div>
        </div>
      </div>
      </div>
    </>
  )
})

export default HowItWorks
