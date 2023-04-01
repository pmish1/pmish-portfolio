import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import {AiFillFileText} from 'react-icons/ai'
import resume from '../assets/pdf/parshwa-mishra-resume-pdf.pdf'


function Contact() {
  return (
    <div className='bg-primary w-full h-screen py-36 flex flex-col justify-center items-center p-4' name="contact">
        <div className='pb-7'>
            <p className='text-4xl font-bold inline border-b-4 border-mainGreen text-gray-300'>Contact</p>
        </div>

        {/* <p className='text-gray-300 pb-5'>Let's get in touch</p> */}
       
        <div className='flex gap-10'>
            <a href="https://linkedin.com/in/parshwa-mishra" className='text-[#0077B5] cursor-pointer flex flex-col items-center hover:scale-110 duration-500'>
                <FaLinkedin size={45}/>
                LinkedIn
            </a>


            <a href="https://github.com/pmish1" className='text-gray-600 cursor-pointer flex flex-col items-center hover:scale-110 duration-500'>
                <FaGithub size={45}/>
                Github
            </a>


            <a href={`mailto:${process.env.REACT_APP_EMAIL}`} className='text-red-500 cursor-pointer flex flex-col items-center hover:scale-110 duration-500'>
                <HiOutlineMail size={45}/>
                Email
            </a>


            <a href={resume} className='text-mainGreen cursor-pointer flex flex-col items-center hover:scale-110 duration-500'>
                <AiFillFileText size={45}/>
                Resume
            </a>
        </div>

        
    </div>
 
  )
}

export default Contact

