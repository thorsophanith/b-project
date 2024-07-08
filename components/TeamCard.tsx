import React from 'react'

interface Props {
    image: string;
    name: string;
    btn: string;
    position: string;
}

const TeamCard = ({image, name, position, btn}: Props) => {
  return (
    <div className='text-center py-10 hover:scale-90 duration-700 hover:shadow-lg hover:shadow-gray-400 p-3 rounded-xl '>
        <div className='flex justify-center'><img src={image} alt="" className='rounded-xl'/></div>
        
        <h1 className=' font-semibold pt-2'>{name}</h1>
        <button className='max-md:text-sm md:text-base bg-gradient-to-l from-amber-400 to-yellow-400 px-3 font-medium uppercase py-1 hover:opacity-65 duration-300 mt-3 text-white rounded-sm mb-3'>{btn}</button>
        <p className='text-sm text-gray-600'>{position}</p>
         
    </div>
  )
}

export default TeamCard