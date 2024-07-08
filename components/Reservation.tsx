import React from 'react'
import Image from 'next/image'
import { BiPhone } from 'react-icons/bi'
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <div className='py-16 px-2 rounded-xl'>
    <div className='max-w-7xl m-auto rounded-ss-xll[=;pl98] px-1 md:px-5 grid grid-cols-1 md:grid-cols-2 text-white bg-gradient-to-tr from-green-500 to-amber-400'>

        <div className='py-3'>
            <h1 className='uppercase max-md:text-center text-2xl md:text-[1.3rem] lg:text-3xl font-semibold'>do you have any dinner plan <br /> today? reserve your table</h1>
            <p className='text-sm py-3 max-md:text-center'>Make online reservations, read restaurant reviews from dinners, and earn points towards free meals OpenTable is a real time online reservation.</p>
            <div className='flex items-center max-md:justify-center gap-3'>
                <div><BiPhone className='text-red-400 hover:animate-ping shadow-xl shadow-pink-200 bg-amber-400 text-3xl sm:text-4xl rounded-md'/></div>
                <div className='text-base max-sm:text-sm'>
                <p>Quick Order 24/7</p>
                <p>+0183 956 5639</p>
                </div>
            </div>
        </div>
        <div className='py-3'>
            <ReservationForm />
        </div>
        </div>
        </div>
 
  )
}

export default Reservation