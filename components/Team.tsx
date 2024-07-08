'use client';
import React from 'react'
import Image from 'next/image';
import TeamCard from './TeamCard';


const Team = () => {
  return (
    <div className='w-[80%] sm:w-[97%] md:w-[94%] lg:w-[90%] m-auto'>
    <h1 className='text-center uppercase font-semibold text-2xl py-20 sm:text-3xl'>MEET our expert <span className='text-amber-600'>Chefs</span></h1>
    <div>
    <div className='md:flex gap-12'>
        <TeamCard
        image='/chef1.jpg'
        name='Jonh Doe'
        btn='kitchen porter'
        position='Homemade Hamburgers on electric grill Baking Homemade Hamburgers'
        />
        <TeamCard
        image='/chef3.jpg'
        name='Jane Doe'
        btn='executive chef'
        position='woman Cook prepares a burger in the kitchen woman Cook prepares a burger in the kitchen nice'
        />
        <TeamCard
        image='/chef2.jpg'
        name='Jason Doe'
        btn='head chef'
        position='Closeup of chef throwing hamburger steaks Clos up of chef throwing hamburger steaks into the air. Concept'
        />
    </div>
    </div>
    </div>
  )
}

export default Team