import React from 'react'
import chatapp from '../assets/chatapp.png'
import carrentals from '../assets/carrentals.png'

function Work() {
  return (
    <div className='bg-primary w-full md:h-screen text-gray-300' name="work">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-mainGreen text-gray-300'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            {/* card container */}
            <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-2'>
                {/* grid item */}
                <div 
                    style={{backgroundImage: `url(${chatapp})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2'
                >                        

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <div className='pt-8 text-center'>
                                <a href="https://whats-app-44493.web.app/">
                                    <button className='text-center rounded-sm px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/pmish1/chat-pmish">
                                    <button className='text-center rounded-sm px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* chat app description */}
                <div className='my-5 mx-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:text-start md:pl-2 md:flex md:items-center'>
                    <div>
                        <h1 className='font-semibold mb-3 border-b border-mainGreen'>React Chat App</h1>
                        <p>Web based chat app where once users have made an account, they are able to send text/image based messages in realtime, as well as search/add friends.</p>
                    </div>
                </div>

                <div 
                    style={{backgroundImage: `url(${carrentals})`, objectFit: 'cover'}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3'
                >                        

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <div>
                            <div className='pt-8 text-center'>
                                <a href="https://main--gorgeous-yeot-dafbca.netlify.app/">
                                    <button className='text-center rounded-sm px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/pmish1/pmish-car-rentals-client">
                                    <button className='text-center rounded-sm px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* car rentals description */}
                <div className='my-5 mx-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:text-end md:mr-4 md:flex md:items-center'>
                    <div>
                        <h1 className='font-semibold mb-3 border-b border-mainGreen'>MERN Car Rental App</h1>
                        <p>This is an MERN stack application with desktop/mobile responsive web design for a car-rental company where users can create/update/delete listings. Customers are able to browse and create reservations for listings.</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Work