import Link from 'next/link'
import React from 'react'
import { ImCross } from 'react-icons/im'

interface Props {
    showNavbar: boolean;
    closeNavbar: () => void;
}

const MobileNavbar = ({closeNavbar, showNavbar}: Props) => {
    const navStyle = showNavbar ? "translate-x-0" : "translate-x-[-100%]";
  return (
            <div className={`fixed ${navStyle} transition-all top-0 right-0 z-50 bg-[#000000e4] h-[100vh] w-[100%]`}>
                <ImCross onClick={closeNavbar} className='absolute top-6 right-3 text-gray-100 cursor-pointer hover:text-gray-500 duration-300 font-light'/>
                <div className={`w-[70%] bg-gray-900 ${navStyle} transition-all delay-200 h-[100vh]`}>
                <ul>
                    <li className='grid gap-7 font-semibold text-gray-200 w-full text-sm py-10 px-4 *:rounded-2xl text-center'>
                        <Link href='/' className='hover:text-gray-500 shadow hover:shadow-md hover:shadow-gray-800 p-2 duration-300'>
                            Home
                        </Link>
                        <Link href='/' className='hover:text-gray-500 shadow hover:shadow-md hover:shadow-gray-800 p-2 duration-300'>
                            Shop
                        </Link>
                        <Link href='/' className='hover:text-gray-500 shadow hover:shadow-md hover:shadow-gray-800 p-2 duration-300'>
                            Menu
                        </Link>
                        <Link href='/' className='hover:text-gray-500 shadow hover:shadow-md hover:shadow-gray-800 p-2 duration-300'>
                            Blog
                        </Link>
                        <Link href='/' className='hover:text-gray-500 shadow hover:shadow-md hover:shadow-gray-800 p-2 duration-300'>
                            Contact
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
)
}

export default MobileNavbar