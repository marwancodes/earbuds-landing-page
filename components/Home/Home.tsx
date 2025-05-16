import React from 'react'
import Hero from './Hero';
import Features from './Features';
import About from './About';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Features />
      <About
        textOrder="lg:order-1"
        imageOrder="lg:order-2"
        linkText="Learn More"
        title="Pure sound, no added noise"
      />
      <About
        textOrder="lg:order-2"
        imageOrder="lg:order-1"
        linkText="Shop Now"
        title="Capture pure sound with 70mm HD drivers"
      />
    </div>
  )
}

export default Home;