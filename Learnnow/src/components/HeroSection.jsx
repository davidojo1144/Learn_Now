import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <>
      <div className='container pt-5 pb-5'>
        <div className='flex md:flex-row flex-col justify-between '>
            <div>
                <div className='space-y-5'>
                    <h1 className='prata-regular text-4xl font-bold min-w-5'>Learn Everyday, Anytime and Anywhere</h1>
                    <p>Learning is not just filling the mind with facts—it’s igniting a fire of curiosity<br/> that never burns out. Every lesson is a step forward, every mistake a hidden<br/> lesson, and every question a door to new worlds.
                        The more you learn, the more<br/> you realize how much there is yet to discover. Knowledge is not a destination but<br/> a journey—one that shapes your thoughts, expands your horizons, and makes life<br/> richer.</p>
                </div>
                <div className='space-x-10 pt-5 items-center'>
                    <button className='py-1 px-5 bg-blue-400 text-white hover:bg-blue-500 rounded-full '>Start Trial</button>
                    <button className='text-blue-500 py-1 px-5 bg-white rounded-full border-2 border-blue-500'>How it works</button>
                </div>
                <div></div>
            </div>
            <img className='w-[30%] rounded-2xl' src={assets.heroimg} alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
