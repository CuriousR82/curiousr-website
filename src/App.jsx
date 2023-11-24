import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arts from "./pages/Arts";
import About from "./pages/About";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';


function App() {
    const location = useLocation(); 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // fetch data here from 4000
    const [isLight, setIsLight] = useState(true);
    const toggleMode = () => { setIsLight(!isLight); };

    // Art Data
    const [artData, setArtData] = useState([]);
    const [artLoading, setArtLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/art-data')
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)

                    setArtData(dataFromServer.results);
                    console.log(dataFromServer.results);
                    // console.log(dataFromServer.results[0].properties.Name.title[0].plain_text);
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setArtLoading(false);
            });
    }, []);

    // Project Data
    const [projectData, setProjectData] = useState([]);
    const [projectLoading, setProjectLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/project-data')
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)

                    setProjectData(dataFromServer.results);
                    console.log(dataFromServer.results);
                    // console.log(dataFromServer.results[0].properties.Name.title[0].plain_text);
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setProjectLoading(false);
            });
    }, []);

    return (

        <div className={`${isLight ? "lightMode" : "darkMode"} min-h-screen `}>
            <Header toggleMode={toggleMode} isLight={isLight} />
            <div className="">
                <Routes>
                    <Route path="/" element={<Home isLight={isLight} artData={artData} projectData={projectData} />} />
                    <Route path="/projects" element={<Projects isLight={isLight} numItem={-1} projectData={projectData} />} />
                    <Route path="/art" element={<Arts isLight={isLight} numItem={-1} artData={artData} />} />
                    <Route path="/about" element={<About isLight={isLight} />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
