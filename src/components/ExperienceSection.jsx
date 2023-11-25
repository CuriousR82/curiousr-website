import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = ({ isLight, expData }) => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container  py-24 px-12 flex flex-col ">
                    <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-6'>Experiences</h1>

                    {/* {console.log(expData)} */}
                    {/* {console.log("exp section")} */}
                    {expData && expData.map((exp, index) => {
                        return <ExperienceCard isLight={isLight} exp={exp} />
                    })}

                </div>
            </section>
        </>
    )
}

export default ExperienceSection
