import React from "react";
import Info from "../components/Info";
import ProjectSection from "../components/ProjectSection";
import ArtSection from "../components/ArtSection";
import ScrollAnimation from 'react-animate-on-scroll';
import ExperienceSection from "../components/ExperienceSection";


const Home = ({ isLight }) => {
    return <>
        {/* keep below two lines as is (the css), its the basic outline fot the page container. */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex gap-20 py-6 flex-col mt-72">
                
                    <Info isLight={isLight} />
                    <ExperienceSection isLight={isLight} />
                    <ProjectSection isLight={isLight} numItem={3} />
                    <ArtSection isLight={isLight} numItem={3} />

            </div>
        </section>
    </>;
};

export default Home;
