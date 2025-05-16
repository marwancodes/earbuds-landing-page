import React from 'react'
import Hero from './Hero';
import Features from './Features';

const Home = () => {
  return (
    <div className='h-[2000px] overflow-hidden'>
      <Hero />
      <Features />
    </div>
  )
}

export default Home;