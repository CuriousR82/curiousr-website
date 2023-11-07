import React from "react";
import Info from "../components/Info";

const Home = ({ isLight }) => {
    return <>
        {/* keep below two lines as is (the css), its the basic outline fot the page container. */}
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-24 py-6 md:flex-row flex-col items-center">
                <Info/>
            </div>
        </section>
    </>;
};

export default Home;
