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
        <div className='flex md:flex-row flex-col'>
          <div className='items-center space-y-3'>
            <h1 className='md:text-xl text-sm font-semibold'>Get in touch</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Stuck on something? Need guidance? <br/>Contact our team—we’re dedicated to making your <br/>learning experience smooth and successful. 
            <br/>Reach out anytime!</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
