import React from 'react'
import Hero from './homePages/hero'
import About from './homePages/about'
import Services from './homePages/services'
import Activities from './homePages/activities'
import Faq from './homePages/faq'
import ContactSection from './homePages/ContactSection'


const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Activities />
      <Faq />
      <ContactSection />
    </>
  )
}

export default HomePage