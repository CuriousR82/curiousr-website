import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectSection from '../components/ProjectSection';


const Projects = ({ isLight, projectData }) => {

    let textColor;
    textColor = isLight ? "text-[#2e313c]" : "text-[#fef8f1c7]";
    
    return (
        <section className='min-h-screen transition pt-32 pb-40'>
            <div className=" container mx-auto flex flex-row justify-between items-center px-10 sm:px-14">
                <h1 className={`rajdhani-bold text-3xl font-semibold ${textColor}`}>Projects</h1>
            </div>
            <ProjectSection isLight={isLight} numItem={-1} projectData={projectData} />
        </section>
    );
};

export default Projects;
