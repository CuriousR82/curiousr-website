import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectCard from './ProjectCard';
import ScrollAnimation from 'react-animate-on-scroll';


const ProjectSection = ({ isLight, numItem }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(numItem);

    useEffect(() => {
        fetch('http://localhost:4000/project-data')
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)

                    setData(dataFromServer.results);
                    console.log(dataFromServer.results);
                    // console.log(dataFromServer.results[0].properties.Name.title[0].plain_text);
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (

        <>
            <section className="container  mx-auto px-12 py-6 items-center justify-center text-gray-600 body-font">
                {/* <ScrollAnimation animateIn="flipInY" duration={15}> */}
                    <h1 className='text-2xl font-semibold text-[#5c7ad6] mb-4'>Projects</h1>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                        {/* {data.map((project) => <>{project.id}</>)} 
                        {data.map((project) => <>{project.properties.Github.url}</>)}  */}

                        {/* {data.map((project) => <ProjectCard key={project.id} data={project} isLight={isLight} />)} */}
                        {(0 < numItem) && data.map((project, index) => {
                            if (index < numItem) {
                                return <ProjectCard key={project.id} data={project} isLight={isLight} />
                            }
                        })}
                        {(numItem < 0) && data.map((project) => <ProjectCard key={project.id} data={project} isLight={isLight} />)}

                        {/* {data.forEach((project, index) => {
                        console.log(numItem);

                        if (index < numItem) {
                            return <ProjectCard key={project.id} data={project} isLight={isLight} />
                        }
                    })} */}

                        {/* <ProjectCard data={data[0]} />  */}

                    </div>
                {/* </ScrollAnimation> */}
            </section>



        </>
    );
};

export default ProjectSection;
