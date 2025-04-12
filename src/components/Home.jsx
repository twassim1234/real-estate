import React from 'react'
import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Testimonials from './Testimonials'
import AboutSection from './AboutSection'

const Home = () => {
  return (
    <div>
      <Header/>
        <AboutSection/>
        <Projects/>
        <Testimonials/>
    </div>
  )
}

export default Home
