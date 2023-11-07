import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
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
          <Route path="/projects" element={<Projects isLight={isLight} />} />
          <Route path="/art" element={<Art isLight={isLight} />} />
          <Route path="/about" element={<About isLight={isLight} />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
