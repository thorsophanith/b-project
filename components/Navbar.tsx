'use client'
import Link from 'next/link'
import React from 'react'
import { BiCycling, BiShoppingBag } from 'react-icons/bi'
import { FaBurger } from 'react-icons/fa6'
import { HiBars3BottomRight } from 'react-icons/hi2'

interface Props {
    openNavbar: () => void;
}

const Navbar = ({openNavbar}:Props) => {
  return (
    <div className=''>
        <div className='h-[10vh] sm:h-[10vh] bg-slate-100 flex items-center justify-between px-2 sm:px-6'>
            <div className='flex items-center gap-2'> <FaBurger className='text-amber-500 text-xl'/> <h1 className='font-semibold text-xl md:text-2xl'>BurgerBite</h1></div>
            <div className='hidden sm:flex'>
                <ul>
                    <li className='flex gap-3 md:gap-10 *:text-gray-700'>
                        <Link href='/' className='hover:text-amber-400 font-semibold  border-amber-400 duration-300'>
                            Home
                        </Link>
                        <Link href='/' className='hover:text-amber-400 font-semibold  border-amber-400 duration-300'>
                            Shop
                        </Link>
                        <Link href='/' className='hover:text-amber-400 font-semibold  border-amber-400 duration-300'>
                            Menu
                        </Link>
                        <Link href='/' className='hover:text-amber-400 font-semibold  border-amber-400 duration-300'>
                            Blog
                        </Link>
                        <Link href='/' className='hover:text-amber-400 font-semibold  border-amber-400 duration-300'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex gap-1 sm:gap-3'>
                <button className='flex items-center sm:gap-1 bg-sky-950 text-gray-100 hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 duration-300 text-xs px-2 sm:text-sm  max-sm:py-[7px] sm:py-2 rounded-sm'><BiCycling /><p className='max-sm:text-[11px]'>Order Now</p></button>
                <button className='bg-gradient-to-l from-orange-400 to-amber-400 text-white text-lg sm:text-xl px-4 rounded-sm duration-300 hover:from-green-500 hover:to-emerald-500'><BiShoppingBag/></button>
                <HiBars3BottomRight onClick={openNavbar} className='text-2xl sm:hidden block cursor-pointer hover:scale-105 hover:text-slate-700'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar