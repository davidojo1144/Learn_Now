import React, { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import Organizations from '../components/Organizations'
import HowItWorks from '../components/HowItWorks'

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
    </div>
  )
}

export default Home
