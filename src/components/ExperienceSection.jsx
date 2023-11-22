import React from 'react'

const ExperienceSection = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container  py-24 px-12 flex flex-col ">
                    <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-6'>Experiences</h1>

                    <div className="flex relative pt-4 pb-16 sm:items-center md:w-2/3 ">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-px bg-[#808080] pointer-events-none"></div>
                        </div>
                        <div className='flex flex-row items-start'>
                            <div className="flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center bg-indigo-500 text-white relative left-1  z-10 title-font font-medium text-sm"></div>

                            <div className="flex-grow md:pl-8 px-6 flex  sm:items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-16 h-16 mt-1 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">CI Technologies</h2>
                                    <p className="leading-relaxed text-base text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta aliquid exercitationem quibusdam dolor mollitia, quas eos nulla laborum consequatur modi. Vel consectetur quae id ipsam accusamus impedit reiciendis assumenda.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative pt-4 pb-16 sm:items-center md:w-2/3 ">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-px bg-[#808080] pointer-events-none"></div>
                        </div>
                        <div className='flex flex-row items-start'>
                            <div className="flex-shrink-0 w-4 h-4 rounded-full mt-8 sm:mt-7 inline-flex items-center justify-center bg-indigo-500 text-white relative left-1  z-10 title-font font-medium text-sm"></div>

                            <div className="flex-grow md:pl-8 px-6 flex  sm:items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-16 h-16 mt-1 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                    <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">CI Technologies</h2>
                                    <p className="leading-relaxed text-base text-[#808080]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur soluta aliquid exercitationem quibusdam dolor mollitia, quas eos nulla laborum consequatur modi. Vel consectetur quae id ipsam accusamus impedit reiciendis assumenda. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ExperienceSection
