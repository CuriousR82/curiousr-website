import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectSection from '../components/ProjectSection';


const Projects = ({ isLight }) => {
    
    return (
        <section className='min-h-screen transition'>
            <ProjectSection isLight={isLight} numItem={-1} />
        </section>
    );
};

export default Projects;
