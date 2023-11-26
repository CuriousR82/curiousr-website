import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arts from "./pages/Arts";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from 'react-router-dom';


function App() {
    const APILink = process.env.REACT_APP_VERCEL_SERVER_LINK;
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isLight, setIsLight] = useState(true);
    const toggleMode = () => { setIsLight(!isLight); };

    // fetch data here from 4000

    // Art Data
    const [artData, setArtData] = useState([]);
    const [artLoading, setArtLoading] = useState(true);
    useEffect(() => {
        fetch(`${APILink}/art-data`)
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)

                    setArtData(dataFromServer.results);
                    console.log(dataFromServer.results);
                    setArtLoading(false);
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
    // useEffect(() => {
    //     fetch(`${APILink}/project-data`)
    //         .then((response) => {
    //             // console.log("response")
    //             // console.log(response)
    //             response.json().then((dataFromServer) => {
    //                 // console.log("data")
    //                 // console.log(dataFromServer.results)

    //                 setProjectData(dataFromServer.results);
    //                 console.log(dataFromServer.results);
    //                 setProjectLoading(false);
    //                 // console.log(dataFromServer.results[0].properties.Name.title[0].plain_text);
    //             })
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //             setProjectLoading(false);
    //         });
    // }, []);

    // Experience Data
    const [expData, setExpData] = useState([]);
    const [expLoading, setExpLoading] = useState(true);
    useEffect(() => {
        fetch(`${APILink}/experience-data`)
            .then((response) => {
                // console.log("response")
                // console.log(response)
                response.json().then((dataFromServer) => {
                    // console.log("data")
                    // console.log(dataFromServer.results)

                    setExpData(dataFromServer.results);
                    console.log(dataFromServer.results);
                    setExpLoading(false);
                    // console.log(dataFromServer.results[0].properties.Name.title[0].plain_text);
                })
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setExpLoading(false);
            });
    }, []);

    // Personal Data
    const [personalData, setPersonalData] = useState([]);
    const [personalLoading, setPersonalLoading] = useState(true);
    // useEffect(() => {
    //     fetch(`${APILink}/personal-data`)
    //         .then((response) => {
    //             // console.log("response")
    //             // console.log(response)
    //             response.json().then((dataFromServer) => {
    //                 // console.log("data")
    //                 // console.log(dataFromServer.results)

    //                 setPersonalData(dataFromServer.results);
    //                 console.log(dataFromServer.results);
    //                 setPersonalLoading(false);
    //             })
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching data:', error);
    //             setPersonalLoading(false);
    //         });
    // }, []);

    if (!artLoading && !projectLoading && !expLoading && !personalLoading) console.log("finished loading");

    return (
        <>
            {(!artLoading && !projectLoading && !expLoading && !personalLoading) && (
                <div className={`${isLight ? "lightMode" : "darkMode"} min-h-screen `}>
                    <Header toggleMode={toggleMode} isLight={isLight} personalData={personalData} />
                    <div className="">
                        <Routes>
                            <Route path="/" element={<Home isLight={isLight} personalData={personalData} artData={artData} projectData={projectData} expData={expData} />} />
                            <Route path="/projects" element={<Projects isLight={isLight} numItem={-1} projectData={projectData} />} />
                            <Route path="/art" element={<Arts isLight={isLight} numItem={-1} artData={artData} />} />
                        </Routes>
                    </div>
                    <Footer isLight={isLight} personalData={personalData} />
                </div>
            )}
        </>

    );
}

export default App;
