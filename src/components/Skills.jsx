import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase.png'

function Skills() {
  return (
    <div name="skills" className='bg-primary text-gray-300 w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-mainGreen'>Skills</p>
                <p className='py-4'>These are the technologies I'm experienced with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className=' hover:scale-110 duration-500'>
                    <img src={html} alt="html icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={css} alt="css icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={javascript} alt="js icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={react} alt="react icon" className='w-20 mx-auto'/>
                    <p className='my-4'>REACT_JS</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={mongo} alt="mongo icon" className='w-20 mx-auto'/>
                    <p className='my-4'>MONGO_DB</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={tailwind} alt="tailwind icon" className='w-20 mx-auto'/>
                    <p className='my-4'>TAWILWIND_CSS</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={node} alt="node icon" className='w-20 mx-auto'/>
                    <p className='my-4'>NODE_JS</p>
                </div>
                <div className=' hover:scale-110 duration-500'>
                    <img src={firebase} alt="firebase icon" className='w-20 mx-auto'/>
                    <p className='my-4'>FIREBASE</p>
                </div>
            </div>

            <div>
                <p className='text-gray-300 mb-10 md:mb-0'>I'm also familiar with AWS S3 and Bootstrap </p>
            </div>

        </div>
    </div>
  )
}

export default Skills