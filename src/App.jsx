import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Arts from "./pages/Arts";
import About from "./pages/About";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleMode = () => {
    setIsLight(!isLight);
  };

  return (
    // <div className="App">
    //   hiughiwrug
    // </div>

    <div className={`${isLight ? "lightMode" : "darkMode"}  
     min-h-screen `}>
      <Header toggleMode={toggleMode} isLight={isLight} />
      <div>
        <Routes>
          <Route path="/" element={<Home isLight={isLight} />} />
          <Route path="/projects" element={<Projects isLight={isLight} numItem={-1} />} />
          <Route path="/art" element={<Arts isLight={isLight} numItem={-1} />} />
          <Route path="/about" element={<About isLight={isLight} />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
