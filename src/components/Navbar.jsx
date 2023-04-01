import React, { useState } from 'react'
import Logo from '../assets/parshwamishdev.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'

import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)  //sets it the opposite of current value 

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-mainGreen'>
            <div>
                <img src={Logo} alt="logo"  style={{width: '350px', marginTop: '5px', marginLeft: "-10px"}}/>
            </div>

            {/* menu */}
            <div className='hidden md:flex'>
                <ul className='flex items-center'>
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            <AiFillHome />
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* hamburger */}
            <div className='md:hidden z-10' onClick={handleClick}>
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            {/* mobile menu */}
            <ul className={nav ? "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center" : "hidden"}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        <AiFillHome />
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            
    </div>
  )
}

export default Navbar