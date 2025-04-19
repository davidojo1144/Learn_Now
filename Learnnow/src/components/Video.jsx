import React from 'react'
import Title from './Title'


const Video = () => {
  return (
    <div className='container'>
      <div>
        <div className='text-center md:text-2xl text-xl'>
            <Title text1={"Why Learning"} text2={"Is Important"}/>
        </div>
        <video className='w-full rounded' src="https://youtu.be/KUWn_TJTrnU?t=113" controls autoPlay loop></video>
      </div>
    </div>
  )
}

export default Video
