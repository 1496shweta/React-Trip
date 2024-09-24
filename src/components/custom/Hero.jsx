import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex  flex-col items-center mx-56 gap-9'>
      <h1 className='font-extrabold text-[50px] text-center mt-40'> <span className='text-[#f56551]'> Discover your new adventure: </span>Lets AI understand your need for Trip </h1>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip to palnner and travel curator , creating custom itineraties tailored to your intereset and budget
        </p>
        <Link to={'./create-trip'}>
        <Button> Get Started, it's free</Button>
        </Link>


      
    </div>
  )
}

export default Hero
