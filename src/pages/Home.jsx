import React from "react";
import Info from "../components/Info";
import Projects from "./Projects";
import Arts from "./Arts";

const Home = ({ isLight }) => {
    return <>
        {/* keep below two lines as is (the css), its the basic outline fot the page container. */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex gap-20 py-6 flex-col mt-72">
                <Info isLight={isLight} />
                <Projects isLight={isLight} numItem={3}/>
                <Arts isLight={isLight} numItem={3}/>
            </div>
        </section>
    </>;
};

export default Home;
