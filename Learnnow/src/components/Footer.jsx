import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-blue-600 mt-20 '>
      <div className='flex md:flex-row flex-col items-center justify-between container text-white'>
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
          <p>Products</p>
        </div>
        <div>
          <p>Useful Links</p>
        </div>
        <div>
          <p>Address</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
