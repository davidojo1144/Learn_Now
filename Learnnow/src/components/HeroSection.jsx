import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <>
      <div className='container pt-5 pb-5'>
        <div className='flex md:flex-row flex-col justify-between '>
            <div>
                <div className='space-y-5'>
                    <h1 className='prata-regular text-4xl font-bold'>Learn Everyday, Anytime and Anywhere</h1>
                    <p>Learning is not just filling the mind with facts—it’s igniting a fire of curiosity that never burns out. Every lesson is a step forward, every mistake a hidden lesson, and every question a door to new worlds.
                        The more you learn, the more you realize how much there is yet to discover. Knowledge is not a destination but a journey—one that shapes your thoughts, expands your horizons, and makes life richer.</p>
                </div>
                <div>
                    <button></button>
                    <button></button>
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
