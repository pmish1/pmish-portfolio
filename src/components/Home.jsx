import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div className='bg-primary w-full h-screen' name="home">
        {/* container  */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-mainGreen'>Hey there! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Parshwa Mishra,</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'am a full-stack developer specalising in building (and occasionally desigining) exceptional
                digital experiences. Currently, I'm focused on building responsive full-stak web applications.
            </p>

            <div>
                <Link to="work" smooth={true} duration={500} className='text-mainGreen rounded-md cursor-pointer group border-2 border-mainGreen px-6 py-3 my-2 w-[175px] flex justify-center items-center hover:bg-mainGreen hover:text-black'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home