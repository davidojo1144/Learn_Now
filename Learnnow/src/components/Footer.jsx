import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <footer className='mt-20 '>
      <div className='flex md:flex-row flex-col md:items-center md:space-y-0 space-y-10 justify-between container text-white'>
        <div>
          <img className='md:w-44 w-32' src={assets.logo} alt="" />
          <p></p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div>
          <p className='md:text-xl text-lg'>Products</p>
        </div>
        <div>
          <p className='md:text-xl text-lg'>Useful Links</p>
        </div>
        <div>
          <p className='md:text-xl text-lg'>Address</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
