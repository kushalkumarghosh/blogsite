import React from 'react'
import { NavLink } from 'react-router-dom'

//react icons
import { FaSquareFacebook, FaSquareDribbble, FaTwitter, FaBars  } from "react-icons/fa6";


const Navbar = () => {
    //navItems
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/services", link: "Services"},
        {path: "/about", link: "About"},
        {path: "/blogs", link: "Blogs"},
        {path: "/contact", link: "Contact"},
    ]
  return (
    <header className='bg-black text-white fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between items-center'>
            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

            {/* navItems for lg devices */}
            <ul className='md:flex gap-12 text-lg hidden'>
                {
                    navItems.map(({path, link}) => <li className='text-white' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons */}
            <div className='text-white lg:flex gap-4 items-center hidden'>
                <a href="/" className='hover:text-orange-500'><FaSquareFacebook /></a>
                <a href="/" className='hover:text-orange-500'><FaSquareDribbble /></a>
                <a href="/" className='hover:text-orange-500'><FaTwitter /></a>
                <button className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white
                hover:text-orange-500 transition-all duration-200 ease-in'>Log in</button>
            </div>

            {/* mobile menu btn, display mobile screen */}
            <div className='md:hidden'>
                <button className='cursor-pointer'><FaBars className='w-5 h-5'/></button>
            </div>

        </nav>
    </header>
  )
}

export default Navbar