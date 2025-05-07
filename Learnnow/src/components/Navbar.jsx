import React, { useState } from 'react'
import { assets } from "../assets/assets"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ResponsiveNavbar from './ResponsiveNavbar'


const Navbar = () => {

  const [open, setOpen] = useState(false)
  const navigate = useNavigate()


  return (
    <>
      <div className='container flex items-center justify-between'>
        <Link to={"/"}><img className='md:w-44 w-32' src={assets.logo} alt="" /></Link>
        <div>
        <ul className='hidden md:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/"  className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/learn"  className="flex flex-col items-center gap-1">
            <p>LEARN</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/contactus"  className="flex flex-col items-center gap-1">
            <p>CONTACT US</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/about"  className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
        <NavLink to="/review"  className="flex flex-col items-center gap-1">
            <p>REVIEWS</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
        </NavLink>
      </ul>
        </div>
        <div>
          <button onClick={()=> navigate("/login")} className='text-sm md:block hidden py-2 px-6 bg-blue-400 hover:bg-blue-500 rounded text-white'>Join Us</button>
        </div>
        {/* {Mobile Menu} */}
          <div className='md:hidden w-6 h-6' onClick={()=> setOpen(!open)}>
            <img src={`${open ? assets.cancel : assets.menu}`} alt="" />
          </div>
      </div>
      <ResponsiveNavbar  open={open} />
    </>
  )
}

export default Navbar
