import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='container'>
       <div className='md:text-2xl text-xl text-center md:pb-10 pb-5 '>
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
      <div className='flex md:flex-row flex-col justify-center gap-16'>
          <img className='w-full md:w-96 rounded-xl' src={assets.aboutpic} alt="" />
        <div className='space-y-10 md:pt-5'>
          <p>Learning is the process of gaining knowledge, skills, or understanding through study, experience, or teaching. It involves taking in new information, practicing, and applying it to improve abilities or solve problems. Learning can happen formally (in schools) or informally (through everyday life). It requires attention, effort, and sometimes mistakes, which help us grow. The goal is to adapt, remember, and use what we learn in different situations.</p>
          <p>Learning is how we acquire new knowledge, develop skills, and deepen our understanding through study, practice, and real-life experiences. It involves absorbing information, applying it, and refining our abilities over time. Learning can be structured (like in classrooms) or spontaneous (like learning from mistakes). It takes focus, repetition, and reflection to master concepts and use them effectively. The purpose of learning is to adapt, grow, and apply what we know to navigate challenges and opportunities in life.</p>
          <div>
            <p className='prata-regular md:text-xl text-lg font-semibold'>Our Mission</p>
            <p>At Learn Now, we believe that learning is the key to growth, empowerment, and a brighter future. Our mission is to make education accessible, engaging, and meaningful for everyone. We strive to foster curiosity, inspire lifelong learning, and equip individuals with the knowledge and skills they need to thrive in an ever-changing world.</p>
          </div>
        </div>
      </div>
      <div>
        <div className='md:text-2xl text-xl  md:pt-16 pt-10'>
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
        </div>
      <div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Learn Now, we are committed to delivering excellence in education through rigorous quality assurance. Our systematic approach ensures that every learning experience is effective, engaging, and aligned with the highest standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Concenience:</b>
          <p className='text-gray-600'>At Learn Now, we believe education should fit your life—not the other way around. That’s why we’ve designed learning to be flexible, accessible, and hassle-free.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Learn Now, your success is our priority. We don’t just provide courses—we provide support that makes learning effortless and enjoyable.</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default About
