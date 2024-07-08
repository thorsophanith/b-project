import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';

interface Props{
    title: string;
    image: string;
    reviews: string;
    price: string;
    description: string;
}

const BergerCard = ({title , image , price , reviews , description}: Props) => {
  return (
    <div className='pt-[2rem] pb-[2rem]'>
    <div className='w-[95%] bg-gray-100 p-3 rounded-xl'>
        <Image src={image} alt={title} width={300} height={200}  className='h-[200px]'/>
        <h2 className='text-lg font-medium mb-2 mt-2'>{title}</h2>
        <div className='flex justify-start gap-5 pb-2'>
        <div className='flex'>
            <FaStar className='text-[16px] text-amber-500'/>
            <FaStar className='text-[16px] text-amber-500'/>
            <FaStar className='text-[16px] text-amber-500'/>
            <FaStar className='text-[16px] text-amber-500'/>
            <FaStar className='text-[16px] text-amber-500'/>
        </div>
        <div>
        <p className='text-sm text-gray-600'>({reviews})</p>
        </div>
        </div>
        <div className='text-sm'>{description}</div>
        <div className='flex items-center justify-between py-2'>
        <div><h3 className='text-lg font-medium text-amber-700'>${price}</h3></div>
        <div><button className='bg-amber-500 px-3 shadow-md shadow-pink-600 py-1 hover:opacity-70 duration-500 rounded-lg text-gray-200'><BiShoppingBag/></button></div>
        </div>
    </div>
    </div>
  )
}

export default BergerCard