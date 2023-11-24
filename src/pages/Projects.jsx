import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectSection from '../components/ProjectSection';


const Projects = ({ isLight, projectData }) => {
    
    return (
        <section className='min-h-screen transition pt-28'>
            <ProjectSection isLight={isLight} numItem={-1} projectData={projectData} />
        </section>
    );
};

export default Projects;
