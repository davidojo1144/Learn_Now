import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <footer className='mt-20 pb-20'>
      <div className='flex md:flex-row flex-col md:items-center md:space-y-0 space-y-10 justify-between container text-white'>
        <div>
          <img className='md:w-44 w-32' src={assets.logo} alt="" />
          <p>Learning is the key to growth—it <br/>empowers you to adapt, overcome challenges, <br/>and unlock new opportunities. Every skill you <br/>gain and every idea you explore strengthens <br/>your future. Knowledge builds confidence, fuels <br/>progress, and keeps your mind sharp. <br/>No matter where life takes you, learning <br/>ensures you’re always moving forward.</p>
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
