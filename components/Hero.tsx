'use client'

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { BiCycling } from 'react-icons/bi';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Hero = () => {
  return (
        <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass="item"
        showDots={true}
        >
            <div className='w-[100%] max-sm:py-16 sm:h-[90vh] flex items-center justify-center flex-col bg-blue-950 clip_path'>
                <div className='w-[80%]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div className=''>
                <Image src="/full-burger-battle.png" alt="" width={400} height={200} className='max-sm:w-[300px]'/>
                </div>
                <div className='text-slate-100 max-sm:py-7 sm:p-3'>
                    <h2 className=' text-amber-300 font-medium text-3xl'>Fast Food Burger</h2>
                    <h1 className='text-3xl sm:text-4xl lg:text-7xl font-semibold py-3'>BEST <br /> BURGERS</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis
                        voluptatum porro beatae blanditiis, minima <br /> facere! Culpa,
                        soluta eligendi commodi ipsam atque magnam quibusdam quisquam!</p>
                        <div className='flex max-sm:justify-center mt-4'>
                        <button className=' flex items-center sm:gap-1 text-gray-100 bg-gradient-to-r from-orange-500 to-amber-500 duration-300 text-base sm:px-4 px-2 py-2 sm:py-3 rounded-sm'><BiCycling /><p className='max-sm:text-[11px]'>Order Now</p></button>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className='w-[100%] max-sm:py-16 sm:h-[90vh] flex items-center justify-center flex-col bg-blue-950 clip_path'>
                <div className='w-[80%]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div className=''>
                <Image src="/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png" alt="" width={400} height={200} className='max-sm:w-[300px]'/>
                </div>
                <div className='text-slate-100 max-sm:py-7 sm:p-3'>
                    <h2 className=' text-amber-300 font-medium text-3xl'>Fast Food Burger</h2>
                    <h1 className='text-3xl sm:text-4xl lg:text-7xl font-semibold py-3'>BEST <br /> BURGERS</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis
                        voluptatum porro beatae blanditiis, minima <br /> facere! Culpa,
                        soluta eligendi commodi ipsam atque magnam quibusdam quisquam!</p>
                        <div className='flex max-sm:justify-center mt-4'>
                        <button className=' flex items-center sm:gap-1 text-gray-100 bg-gradient-to-r from-orange-500 to-amber-500 duration-300 text-base sm:px-4 px-2 py-2 sm:py-3 rounded-sm'><BiCycling /><p className='max-sm:text-[11px]'>Order Now</p></button>
                        </div>
                </div>
                </div>
                </div>
            </div>
            <div className='w-[100%] max-sm:py-16 sm:h-[90vh] flex items-center justify-center flex-col bg-amber-800 clip_path'>
                <div className='w-[80%]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
                <div className=''>
                <Image src="/shopping.png" alt="" width={400} height={200} className='max-sm:w-[300px]'/>
                </div>
                <div className='text-slate-100 max-sm:py-7 sm:p-3'>
                    <h2 className=' text-amber-300 font-medium text-3xl'>Fast Food Burger</h2>
                    <h1 className='text-3xl sm:text-4xl lg:text-7xl font-semibold py-3'>BEST <br /> BURGERS</h1>
                    <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis
                        voluptatum porro beatae blanditiis, minima <br /> facere! Culpa,
                        soluta eligendi commodi ipsam atque magnam quibusdam quisquam!</p>
                        <div className='flex max-sm:justify-center mt-4'>
                        <button className=' flex items-center sm:gap-1 text-gray-100 bg-gradient-to-r from-blue-800 to-sky-600 duration-300 text-base sm:px-4 px-2 py-2 sm:py-3 rounded-sm'><BiCycling /><p className='max-sm:text-[11px]'>Order Now</p></button>
                        </div>
                </div>
                </div>
                </div>
            </div>
        </Carousel>
  )
}

export default Hero