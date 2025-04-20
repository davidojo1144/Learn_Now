import React, { useContext } from 'react'
import Title from '../components/Title'
import { LearnNowContext } from '../context/LearnNowContext'

const ContactUs = () => {
  const submitHandler = (event)=> {
    event.preventDefault()
  }

  const {phone, email} = useContext(LearnNowContext)


  return (
    <div>
      <div className='container'>
        <div className='text-center md:text-2xl text-xl md:pb-20 pb-10'>
          <Title text1={"CONTACT"} text2={"US"}/>
        </div>
        <div className='flex md:flex-row  justify-between flex-col md:space-y-0 space-y-10'>
          <div className='items-center md:space-y-3 space-y-2'>
            <h1 className='text-xl font-semibold'>Get in touch</h1>
            <p className="text-sm md:font-medium font-light">Email: {email}</p>
            <p className="text-sm md:font-medium font-light">Phone: {phone}</p>
            <p className="text-sm md:font-medium font-light">Stuck on something? Need guidance? <br/>Contact our team—we’re dedicated to making your <br/>learning experience smooth and successful. 
            <br/>Reach out anytime!</p>
          </div>
          <div onSubmit={submitHandler} className='space-y-5'>
            <div className='flex space-x-5'>
              <input className='w-full py-2 px-5 border-2 border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200' type="text"  placeholder='Name' required/>
              <input className='w-full py-2 px-5 border-2 border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200' type="email" placeholder='Email' required/>
            </div>
            <textarea className='w-full px-4 py-3 border-2 border-gray-400 rounded focus:border-blue-400 hover:border-blue-300 outline-none transition duration-200' name="text" id="" placeholder='Message' required></textarea>
            <button className='py-2 px-8 bg-blue-400 hover:bg-blue-500 rounded-xl text-white'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
