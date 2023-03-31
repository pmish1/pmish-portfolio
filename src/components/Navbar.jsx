import React, { useState } from 'react'
import Logo from '../assets/parshwamishdev.png'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)  //sets it the opposite of current value 

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-primary text-mainGreen'>
            <div>
                <img src={Logo} alt="logo image"  style={{width: '350px', marginTop: '5px', marginLeft: "-10px"}}/>
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
                        Home
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

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
            
    </div>
  )
}

export default Navbar