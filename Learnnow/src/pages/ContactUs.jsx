import React, { useContext } from 'react'
import Title from '../components/Title'
import { LearnNowContext } from '../context/LearnNowContext'

const ContactUs = () => {

  const {phone, email} = useContext(LearnNowContext)


  return (
    <div>
      <div className='container'>
        <div className='text-center md:text-2xl text-xl pb-20'>
          <Title text1={"CONTACT"} text2={"US"}/>
        </div>
        <div className='flex md:flex-row  justify-between flex-col'>
          <div className='items-center space-y-3'>
            <h1 className='md:text-xl text-sm font-semibold'>Get in touch</h1>
            <p className="text-sm md:font-medium font-light">Email: {email}</p>
            <p className="text-sm md:font-medium font-light">Phone: {phone}</p>
            <p className="text-sm md:font-medium font-light">Stuck on something? Need guidance? <br/>Contact our team—we’re dedicated to making your <br/>learning experience smooth and successful. 
            <br/>Reach out anytime!</p>
          </div>
          <div className='space-y-5'>
            <div className='flex space-x-5'>
              <input className='w-full py-1 px-5 border-2 rounded' type="text"  placeholder='Name'/>
              <input className='w-full py-3 px-5' type="email" placeholder='Email'/>
            </div>
            <textarea className='w-full px-4 py-3 rounded' name="text" id="" placeholder='Message'></textarea>
            <button className='py-2 px-8 bg-blue-400 hover:bg-blue-500 rounded-xl text-white'>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
