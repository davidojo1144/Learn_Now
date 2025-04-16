import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { LearnNowContext } from '../context/LearnNowContext'

const HeroSection = () => {

    const { studentTrained, courses, professionalTrainers} = useContext(LearnNowContext)


  return (
    <>
      <div className='container pt-5 pb-5'>
        <div className='flex md:flex-row flex-col justify-between md:space-y-0 space-y-7 border-2 shadow-xl p-8 rounded-xl '>
            <div>
                <div className='space-y-5'>
                    <h1 className='prata-regular md:text-4xl text-2xl font-bold min-w-5'>Learn Everyday, Anytime and <br/>Anywhere</h1>
                    <p>Learning is not just filling the mind with facts—it’s igniting a fire of curiosity<br/> that never burns out. Every lesson is a step forward, every mistake a hidden<br/> lesson, and every question a door to new worlds.
                        The more you learn, the more<br/> you realize how much there is yet to discover. Knowledge is not a destination but<br/> a journey—one that shapes your thoughts, expands your horizons, and makes life<br/> richer.</p>
                </div>
                <div className='md:space-x-10 space-x-2  pt-5 items-center'>
                    <button className='py-1 px-5 bg-blue-400 text-white hover:bg-blue-500 rounded-full '>Start Trial</button>
                    <button className='text-blue-500 py-1 px-5 bg-white rounded-full border-2 border-blue-500'>How it works</button>
                </div>
                <div className='flex md:space-x-20 space-x-8 pt-8'>
                    <div>
                        <p className='md:text-2xl text-xl text-teal-600 font-semibold'>{courses}</p>
                        <p className='md:text-lg text-sm font-light'>Courses to <br/>choose from</p>
                    </div>
                    <div>
                        <p className='md:text-2xl text-xl text-blue-600 font-semibold'>{studentTrained}</p>
                        <p className='md:text-lg text-sm font-light'>Student</p>
                        <p className='md:text-lg text-sm font-light'>trained</p>
                    </div>
                    <div>
                        <p className='md:text-2xl text-xl text-orange-600 font-semibold'>{professionalTrainers}</p>
                        <p className='md:text-lg text-sm font-light'>Professional <br/>Trainers</p>
                    </div>
                </div>
            </div>
            <img className='md:w-[30%] rounded-2xl' src={assets.heroimg} alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
