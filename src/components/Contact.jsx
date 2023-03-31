import React from 'react'

function Contact() {
  return (
    <div className='bg-primary w-full h-screen flex justify-center items-center p-4' name="contact">
        <form 
            action={process.env.REACT_APP_FORM_URL}
            className='flex flex-col max-w-[600px] w-full text-gray-300'
            method="POST"
        >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-mainGreen text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit form below or shoot me an email - example@example.com</p>
            </div>
            <input className="p-2 bg-black border border-mainGreen rounded-md outline-none" type="text" placeholder="Name" name="name"/>
            <input className="my-4 p-2  bg-black border border-mainGreen rounded-md outline-none" type="email" placeholder="Email" name="email"/>
            <textarea name="message" rows="10" className=" bg-black border border-mainGreen p-2 rounded-md outline-none" placeholder='Message'></textarea>
            <button className='text-black bg-mainGreen hover:scale-110 duration-500 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's get in touch</button>
        </form>        
    </div>
  )
}

export default Contact