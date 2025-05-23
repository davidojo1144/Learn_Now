import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import Organizations from '../components/Organizations'
import HowItWorks from '../components/HowItWorks'
import Video from '../components/Video'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {

  const howItWorksRef = useRef(null)

  const scrollToHowItWorks = ()=> {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div>
      <HeroSection scrollToHowItWorks={scrollToHowItWorks} />
      <Organizations/>
      <HowItWorks ref={howItWorksRef} />
      <Video/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
