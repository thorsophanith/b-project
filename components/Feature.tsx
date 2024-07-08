import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='py-12'>
    <div className='text-2xl *:hover:scale-125 *:duration-500 sm:text-4xl font-semibold hover:font-bold hover:text-slate-500 text-center text-gray-800 mt-10'>
        <h1 className='pb-2 sm:pb-4'>BURGERS MADE WITH</h1>
        <h1>LOVE AND <span className='text-amber-500'>CARE</span></h1>
    </div>
    <div className='py-16 sm:flex grid justify-evenly items-center text-center gap-10 *:rounded-2xl px-8 md:px-16 lg:px-20'>
        <div className='grid p-2 place-items-center shadow-lg hover:scale-90 duration-500 hover:shadow-2xl py-10'>
            <Image src="/OIP.jpg" alt="" width={400} height={300} className='rounded-2xl sm:w-[31vh] md:w-[35vh] lg:w-[47vh]'/>
            <h1 className='sm:text-base py-1 md:text-lg lg:text-xl font-semibold'>Our Burger</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis!</p>
            </div>
        <div className='grid p-2 place-items-center shadow-lg hover:scale-90 duration-500 hover:shadow-2xl py-10 md:translate-y-[3rem] max-sm:py-16'>
        <Image src="/R.jpg" alt="" width={400} height={300} className='rounded-2xl sm:w-[31vh] md:w-[35vh] lg:w-[47vh]'/>
            <h1 className='sm:text-base py-1 md:text-lg lg:text-xl font-semibold'>Your Opinion is Important</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis!</p>
            </div>
        <div className='grid p-2 place-items-center shadow-lg hover:scale-90 duration-500 hover:shadow-2xl py-10'>
        <Image src="/OIP (1).jpg" alt="" width={400} height={300} className='rounded-2xl sm:w-[31vh] md:w-[35vh] lg:w-[47vh]'/>
            <h1 className='sm:text-base py-1 md:text-lg lg:text-xl font-semibold'>Chivken Burgers</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus placeat eum exercitationem iste eligendi facilis!</p>
            </div>
    </div>
    </div>
  )
}

export default Feature