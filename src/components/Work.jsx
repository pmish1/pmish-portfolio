import React from "react"
import chatapp from "../assets/chatappmish.png"
import carrentals from "../assets/carrentals.png"
import similarityapi from "../assets/similarityapi.png"

function Work() {
    return (
        <div
            className="bg-primary w-full md:h-screen text-gray-300"
            name="work"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-mainGreen text-gray-300">
                        Work
                    </p>
                    <p className="pt-6 ">
                        This is what I've been up to recently.
                    </p>
                </div>
                {/* ------------------------------------------------------------- */}

                {/* card container */}
                <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 ">
                    {/* ------------------------------------------------------------- */}
                    {/* api service  */}
                    <div
                        style={{
                            backgroundImage: `url(${similarityapi})`,
                            objectFit: "contain",
                        }}
                        className="group container flex justify-center items-center mx-auto content-div md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:mt-[5px]"
                    >
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <div>
                                <div className="pt-8 text-center">
                                    <a
                                        href="https://similarity-api-pmish.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/pmish1/similarity-api-pmish"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* api service description */}
                    <div className="my-5 mx-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:text-start md:mr-4 md:flex md:items-center">
                        <div>
                            <h1 className="font-semibold mb-3 border-b border-mainGreen">
                                Full Stack API service
                            </h1>
                            <p>
                                API service with rate-limited and protected
                                routes which allows users submit text which are
                                compared using OpenAI&apos;s Embeddings API and
                                a Cosine Similarity algorithm to return a value
                                describing the similarity between the texts.{" "}
                            </p>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------- */}

                    {/* car rentals  */}
                    <div
                        style={{
                            backgroundImage: `url(${carrentals})`,
                            objectFit: "cover",
                        }}
                        className="group container flex justify-center items-center mx-auto content-div md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:mt-[5px]"
                    >
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <div>
                                <div className="pt-8 text-center">
                                    <a
                                        href="https://main--gorgeous-yeot-dafbca.netlify.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/pmish1/pmish-car-rentals-client"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* car rentals description */}
                    <div className="my-5 mx-2 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:text-end md:mr-4 md:flex md:items-center">
                        <div>
                            <h1 className="font-semibold mb-3 border-b border-mainGreen">
                                MERN Car Rental App
                            </h1>
                            <p>
                                A full-stack application utilizing the MERN
                                stack and responsive web design to facilitate
                                listing management for a car-rental company.{" "}
                            </p>
                        </div>
                    </div>

                    {/* ------------------------------------------------------------- */}

                    {/* chat app */}
                    <div
                        style={{ backgroundImage: `url(${chatapp})` }}
                        className="group container flex justify-center items-center mx-auto content-div md:col-start-1 md:col-end-2 md:row-start-3 md:row-end-4"
                    >
                        {/* hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <div>
                                <div className="pt-8 text-center">
                                    <a
                                        href="https://whats-app-44493.web.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href="https://github.com/pmish1/chat-pmish"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center px-4 py-3 m-2 bg-mainGreen text-black font-bold text-lg">
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* chat app description */}
                    <div className="my-5 mx-2 md:col-start-2 md:col-end-3 md:row-start-3 md:row-end-4 md:text-start md:flex md:items-center">
                        <div>
                            <h1 className="font-semibold mb-3 border-b border-mainGreen">
                                React Chat App
                            </h1>
                            <p>
                                A real-time web-based chat application, equipped
                                with user authentication and authorization
                                functionalities.
                            </p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------- */}
            </div>
            {/* ------------------------------------------------------------- */}
        </div>
    )
}

export default Work
