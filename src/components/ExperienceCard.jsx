import React from 'react'

const ExperienceCard = () => {
    return (
        <>
            <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 ">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className='flex flex-row items-start'>
                    <div className="flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center bg-indigo-500 text-white relative left-1  z-10 title-font font-medium text-sm"></div>

                    <div className="flex-grow md:pl-8 px-6 flex sm:items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-16 h-16 mt-1 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">CI Technologies</h2>
                            <p className="leading-relaxed text-base text-[#808080]">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal. VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExperienceCard