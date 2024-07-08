'use client';
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import BergerCard from './BergerCard';


const responsive = {
    desktop: {
      breakpoint: { max:4000, min:1324 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max:1324, min:764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max:764, min:0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const PopularBurger = () => {
  return (
    <div className=' w-[99%] md:w-[90%] lg:w-[87%] m-auto mt-[4rem] rounded-xl'>
        <h2 className='text-3xl sm:text-4xl mt-20 mb-10 font-semibold hover:font-bold hover:scale-110 hover:text-gray-600 duration-500 text-center'>Our Popular <span className='text-amber-500'>Burgers</span> </h2>
        <div>
        <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        centerMode={true}
        autoPlaySpeed={6000}
        infinite
        responsive={responsive}
        itemClass="item"
        // showDots={true}
        >
                <BergerCard
                title='Beefy Bite'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
                image='/full-burger-battle.png'
                reviews='17'
                price='12.99'
                />
                <BergerCard
                title='Beefy Bite'
                image='/fast-food-png-most-popular-fast-food-snacks-in-your-area-and-most--3.png'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
                reviews='8'
                price='8.99'
                />
                <BergerCard
                title='Beefy Bite'
                image='/pngtree-hot-cheesy-burger-isolated-on-transparent-background-png-image_9133351.png'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
                reviews='12'
                price='10.99'
                />
                <BergerCard
                title='Beefy Bite'
                image='/R.png'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
                reviews='3'
                price='5.99'
                />
                <BergerCard
                title='Beefy Bite'
                image='/pngtree-tasty-burger-isolated-on-white-background-png-image_10890128.png'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit.!'
                reviews='16'
                price='15.99'
                />
        </Carousel>
    </div>
    </div>
  )
}

export default PopularBurger