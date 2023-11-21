import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectCard from '../components/ProjectCard';


const Projects = ({ isLight }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <section className="container min-h-screen mx-auto px-12 py-6 items-center justify-center text-gray-600 body-font">
                <h1 className='text-xl font-semibold text-[#5c7ad6] mb-4'>Projects</h1>
                <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
                    {/* {data.map((project) => <>{project.id}</>)} 
                        {data.map((project) => <>{project.properties.Github.url}</>)}  */}
                    {data.map((project) => <ProjectCard key={project.id} data={project} isLight={isLight} />)}
                    {/* <ProjectCard data={data[0]} />  */}

                </div>
            </section>



        </>
    );
};

export default Projects;
