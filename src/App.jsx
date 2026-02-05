import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Education from './sections/Education'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experiences />
        {/* navbar*/}
        {/* navbar*/}
        {/* navbar*/}
    </div>
  )
}

export default App