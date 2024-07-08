import React from 'react'
import Image from 'next/image'
import {RiEBike2Fill} from 'react-icons/ri'
import { IoFastFood } from 'react-icons/io5'
import { BsDoorOpen } from 'react-icons/bs'

const Delivery = () => {
  return (
    <div className='py-10'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="flex items-center justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="animate-bounce object-cover object-center rounded" alt="hero" src="/jh-530x530.png" width={400} height={300}/>
    </div>
    <div className="sm:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font text-2xl sm:text-4xl  py-7 uppercase font-semibold text-gray-900">YOUR <span className='text-amber-500'>FAVORITE BURGER</span> ON<br /> THE WAY!</h1>
      <p className="mb-8 text-sm text-gray-600">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="text-sm sm:text-base grid gap-2 text-gray-950 font-medium *:uppercase">
        <p className='flex items-center gap-3 text-gray-700'><RiEBike2Fill className='text-orange-600 text-2xl sm:text-3xl '/> OELIVERY IN 30 MINUTES</p>
        <p className='flex items-center gap-3 text-gray-700'>  <IoFastFood className='text-orange-600 text-2xl sm:text-3xl '/> FREE SHIPPING FROM 75$</p>
        <p className='flex items-center gap-3 text-gray-700'>  <BsDoorOpen className='text-orange-600 text-2xl sm:text-3xl '/> DELIVERY ON YOUR DOORSTEP</p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Delivery