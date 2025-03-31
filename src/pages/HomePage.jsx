import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Featured from '../components/Featured'

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Featured/>
    </div>
  )
}

export default HomePage
