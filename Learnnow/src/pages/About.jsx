import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='container'>
       <div className='md:text-2xl text-xl text-center pb-10 md:pb-16'>
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
      <div className='flex md:flex-row flex-col gap-16'>
          <img className='w-full md:w-96 rounded-xl' src={assets.aboutpic} alt="" />
        <div className='space-y-10'>
          <p>Learning is the process of gaining knowledge, skills, or understanding through study, experience, or teaching. It involves taking in new information, practicing, and applying it to improve abilities or solve problems. Learning can happen formally (in schools) or informally (through everyday life). It requires attention, effort, and sometimes mistakes, which help us grow. The goal is to adapt, remember, and use what we learn in different situations.</p>
          <p>Learning is how we acquire new knowledge, develop skills, and deepen our understanding through study, practice, and real-life experiences. It involves absorbing information, applying it, and refining our abilities over time. Learning can be structured (like in classrooms) or spontaneous (like learning from mistakes). It takes focus, repetition, and reflection to master concepts and use them effectively. The purpose of learning is to adapt, grow, and apply what we know to navigate challenges and opportunities in life.</p>
          <p className='prata-regular md:text-xl text-lg md:font-semibold font-medium'>Our Mission</p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default About
