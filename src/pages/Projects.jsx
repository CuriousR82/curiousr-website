import { Client } from '@notionhq/client';
import React, { useState, useEffect } from "react";
import ProjectSection from '../components/ProjectSection';


const Projects = ({ isLight }) => {
    
    return (
        <>
            <ProjectSection isLight={isLight} numItem={-1} />
        </>
    );
};

export default Projects;
