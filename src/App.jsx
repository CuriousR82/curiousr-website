import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [isLight, setIsLight] = useState(true);

  const toggleMode = () => {
    setIsLight(!isLight);
  };

  return (
    // <div className="App">
    //   hiughiwrug
    // </div>

    <div className={`h-[100%] w-[100%] ${isLight ? "lightMode" : "darkMode"}`}>
      <Navbar toggleMode={toggleMode} isLight={isLight} />
      <div className="max-[600px]:mx-12 max-[980px]:mx-24 min-[980px]:mx-40 pt-24">
        <Routes>
          <Route path="/" element={<Home isLight={isLight} />} />
          <Route path="/projects" element={<Projects isLight={isLight} />} />
          <Route path="/art" element={<Art isLight={isLight} />} />
          <Route path="/about" element={<About isLight={isLight} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
