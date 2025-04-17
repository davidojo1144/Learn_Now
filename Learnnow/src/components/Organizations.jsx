import React from 'react'
import { assets } from '../assets/assets'

const Organizations = () => {
  return (
    <div>
      <div className='flex items-center pt-10 space-x-2'>
        <div>
            <h1 className='prata-regular md:text-xl text-sm'>Expert Teaching Delivered</h1>
            <p>By world-class universities and organisation</p>
        </div>
        <div className='w-28 h-16 flex space-x-7'>
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
