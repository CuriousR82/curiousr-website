import React from 'react'

const Info = () => {
    return (
        <>
            {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"> */}
            <div className="flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi! I'm Rosa,
                </h1>
                <p className="mb-8 leading-relaxed">I am currently a second-year CS student at the University of Waterloo.<br></br>
                I dream to solve problems in the world of computers and art.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                </div>
            </div>
            {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
            <div className="">
                <img className="object-cover object-center rounded" alt="" src="" width={200}></img>
            </div>
        </>
    )
}

export default Info
