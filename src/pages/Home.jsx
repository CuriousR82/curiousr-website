import React from "react";
import Info from "../components/Info";
import ProjectSection from "../components/ProjectSection";
import ArtSection from "../components/ArtSection";
import ScrollAnimation from 'react-animate-on-scroll';
import ExperienceSection from "../components/ExperienceSection";
import { NavLink } from "react-router-dom";


const Home = ({ isLight, artData, projectData }) => {
    return <>
        {/* keep below two lines as is (the css), its the basic outline fot the page container. */}
        <div id="home-section" className=" pb-40 fade-on-load flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex gap-24 flex-col mt-72">

                <Info isLight={isLight} />
                <ExperienceSection isLight={isLight} />

                <section id="project-section">
                    <div className="flex flex-row justify-between items-center px-12">
                        <h1 className='text-2xl font-semibold text-[#5c7ad6]'>Projects</h1>
                        <NavLink to="/projects" className="text-[#5c7ad6] hover:text-slate-400">See all</NavLink>
                    </div>
                    <ProjectSection isLight={isLight} numItem={3} projectData={projectData} />
                </section>

                <section id="art-section">
                    <div className="flex flex-row justify-between items-center px-12">
                        <h1 className='text-2xl font-semibold text-[#5c7ad6]'>Arts</h1>
                        <NavLink to="/art" className="text-[#5c7ad6] hover:text-slate-400">See all</NavLink>
                    </div>
                    <ArtSection isLight={isLight} numItem={3} artData={artData} />
                </section>

            </div>
        </div>
    </>;
};

export default Home;
