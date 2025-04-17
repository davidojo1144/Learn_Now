import React from 'react'
import { assets } from '../assets/assets'

const Organizations = () => {
  return (
    <div className='container'>
      <div className='flex md:flex-row flex-col items-center pt-20 md:space-x-2'>
        <div>
            <h1 className='prata-regular text-xl '>Expert Teaching Delivered</h1>
            <p className='text-sm '>By world-class universities and organisation</p>
        </div>
        <div className='w-20 h-16 flex md:flex-row flex-col items-center md:space-x-7'>
            <img src={assets.coursera} alt="" />
            <img src={assets.google} alt="" />
            <img src={assets.ibm} alt="" />
            <img src={assets.skillshare} alt="" />
            <img src={assets.stanford} alt="" />
            <img src={assets.udemy} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Organizations
