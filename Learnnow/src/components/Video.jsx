import React from 'react';
import Title from './Title';
import YouTube from 'react-youtube';

const Video = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: 'KUWn_TJTrnU'
    },
  };

  return (
    <div className='container pb-10'>
      <div>
        <div className='text-center md:text-2xl text-xl'>
          <Title text1={"Why Learning"} text2={"Is Important"}/>
        </div>
        <div className="w-full aspect-video rounded overflow-hidden">
          <YouTube
            videoId="KUWn_TJTrnU"
            opts={opts}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Video;