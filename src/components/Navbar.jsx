import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleMode, isLight }) => {
  // const []

  const [menuOpen, setMenuOpen] = useState(false);

  let burgerColor;
  let textColor;

  if (isLight) {
    burgerColor = "bg-[#2e313c]";
    textColor = "text-[#2e313c]";
  } else {
    burgerColor = "bg-[#fef8f1c7]";
    textColor = "text-[#fef8f1c7]";
  }

  return (
    <nav
      className={`flex justify-between items-center py-3 top-3 backdrop-blur-xl max-[600px]:px-10 max-[980px]:px-24 min-[980px]:px-40`}
    >
      <Link to="/" className={`title text-3xl font-semibold text-[#E47F84]`}>
        CuriousR
      </Link>

      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className="min-[600px]:hidden absolute top-4 right-12 col flex flex-col justify-between w-7 h-6 flex"
      >
        <span className={`h-1 w-[100%] ${burgerColor} rounded`}></span>
        <span className={`h-1 w-[100%] ${burgerColor} rounded`}></span>
        <span className={`h-1 w-[100%] ${burgerColor} rounded`}></span>
      </div>
      {/* {menuOpen ? "open" :  ""} */}

      <ul className={menuOpen ? "open" : ""}>
        <li className="">
          <NavLink
            to="/projects"
            className={`text-base ${textColor} hover:text-[#E47F84]`}
          >
            PROJECTS
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/s"
            className={`text-base ${textColor} hover:text-[#E47F84]`}
          >
            ART
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/about"
            className={`text-base ${textColor} hover:text-[#E47F84]`}
          >
            ABOUT
          </NavLink>
        </li>
        <button onClick={toggleMode}>Mode</button>
      </ul>
    </nav>
  );
};

export default Navbar;
