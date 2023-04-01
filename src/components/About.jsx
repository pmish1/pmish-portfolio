import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-primary text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-mainGreen'>About</p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Here's why I'm so awesome</p>
                </div>
                <div>
                    <p>
                        I'm Parshwa. I have a life-long background in maths and science. My passion for software 
                        development stems from my desire to combine both my technical skills with my creativity. I enjoy working 
                        on projects that challenge me to think outside the box and to come up with innovative solutions to complex
                        problems. 
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default About