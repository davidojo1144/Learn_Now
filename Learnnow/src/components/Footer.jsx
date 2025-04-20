import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <footer className='mt-20 pb-20'>
      <div className='flex md:flex-row flex-col md:items-center md:space-y-0 space-y-10 justify-between container text-white'>
        <div>
          <img className='md:w-44 w-32' src={assets.logo} alt="" />
          <p  className='text-sm font-light'>Learning is the key to growth—it <br/>empowers you to adapt, overcome challenges, <br/>and unlock new opportunities. Every skill you <br/>gain and every idea you explore strengthens <br/>your future. Knowledge builds confidence, fuels <br/>progress, and keeps your mind sharp. <br/>No matter where life takes you, learning <br/>ensures you’re always moving forward.</p>
          <div className='flex w-28 pt-5 space-x-5 items-center justify-center '>
            <div className='bg-gray-500 rounded-xl p-1 hover:bg-gray-400 cursor-pointer'>
              <img src={assets.facebook} alt="" />
            </div>
            <div className='bg-gray-500 rounded-xl p-1 hover:bg-gray-400 cursor-pointer'>
              <img src={assets.instagram} alt="" />
            </div>
            <div className='bg-gray-500 rounded-xl p-1 hover:bg-gray-400 cursor-pointer'>
              <img src={assets.twitter} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p className='md:text-xl text-lg pb-16'>Products</p>
          <div className='text-sm font-light'>
            <p>Writing & Note-Taking</p>
            <p>Reading & Reference</p>
            <p>Digital Learning Tools</p>
            <p>Math & Science Supplies</p>
            <p>Creativity & Projects</p>
            <p>Organization & Study Aids</p>
            <p>Comfort & Focus</p>
          </div>
        </div>
        <div>
          <p className='md:text-xl text-lg'>Useful Links</p>
          <div>
            <a href="#"></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
        <div>
          <p className='md:text-xl text-lg'>Address</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
